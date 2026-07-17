"use client";

import { useRef, useState, useTransition } from "react";
import type { ContactFormSubmission } from "@/types/site";

/**
 * Small UI state object for user feedback after submit attempts.
 */
type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

/**
 * Client-side validation gives immediate feedback before we make a network call.
 * The API route repeats the same checks because browser validation can be bypassed.
 */
function validateSubmission(payload: ContactFormSubmission) {
  if (
    !payload.firstName.trim() ||
    !payload.lastName.trim() ||
    !payload.email.trim() ||
    !payload.phone.trim() ||
    !payload.message.trim()
  ) {
    return "Please fill in all required fields.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(payload.email.trim())) {
    return "Please enter a valid email address.";
  }

  if (payload.message.trim().length < 12) {
    return "Please share a little more detail in your message.";
  }

  return null;
}

/**
 * Contact form component responsible for collecting data and calling the API.
 * The actual email sending happens on the server in `/api/contact`.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>(initialState);
  const [isPending, startTransition] = useTransition();

  /**
   * Sends the validated payload to the server and updates the UI based on the response.
   */
  async function submitContactForm(payload: ContactFormSubmission) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setState({
        status: "error",
        message:
          result.message ??
          "Something went wrong while sending your message. Please try again.",
      });
      return;
    }

    // Resetting the form only happens after the server confirms success.
    formRef.current?.reset();
    setState({
      status: "success",
      message:
        result.message ??
        "Thanks for reaching out. Your message has been sent successfully.",
    });
  }

  /**
   * Builds a typed payload from the browser form event, validates it, and then
   * starts the async submit without blocking urgent UI updates.
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState(initialState);

    const formData = new FormData(event.currentTarget);
    const payload: ContactFormSubmission = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const validationError = validateSubmission(payload);

    if (validationError) {
      setState({
        status: "error",
        message: validationError,
      });
      return;
    }

    startTransition(async () => {
      await submitContactForm(payload);
    });
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="surface-card space-y-6 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First Name" name="firstName" autoComplete="given-name" />
        <Field label="Last Name" name="lastName" autoComplete="family-name" />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
        />
        <Field label="Phone" name="phone" autoComplete="tel" />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold tracking-[0.02em] text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={12}
          className="min-h-40 w-full rounded-[1.5rem] border border-line bg-white/80 px-4 py-3 text-base text-foreground outline-none transition focus:border-sage-deep focus:ring-2 focus:ring-sage-deep/20"
          placeholder="Tell us a bit about what you are looking for."
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sage-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>

        <p
          className={`text-sm leading-6 ${
            state.status === "error"
              ? "text-[#8a4f3d]"
              : state.status === "success"
                ? "text-sage-deep"
                : "text-muted"
          }`}
          aria-live="polite"
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: keyof ContactFormSubmission;
  autoComplete?: string;
  type?: "text" | "email" | "tel";
}

/**
 * Small input wrapper so each text field stays styled and labeled the same way.
 */
function Field({
  label,
  name,
  autoComplete,
  type = "text",
}: FieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-semibold tracking-[0.02em] text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        minLength={type === "tel" ? 7 : undefined}
        className="min-h-12 w-full rounded-full border border-line bg-white/80 px-4 text-base text-foreground outline-none transition focus:border-sage-deep focus:ring-2 focus:ring-sage-deep/20"
      />
    </div>
  );
}
