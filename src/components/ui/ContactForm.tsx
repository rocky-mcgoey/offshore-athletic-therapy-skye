"use client";

import { useRef, useState, useTransition } from "react";
import type { ContactFormSubmission } from "@/types/site";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>(initialState);
  const [isPending, startTransition] = useTransition();

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

    formRef.current?.reset();
    setState({
      status: "success",
      message:
        result.message ??
        "Thanks for reaching out. Your message has been sent successfully.",
    });
  }

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
            state.status === "error" ? "text-[#8a4f3d]" : "text-muted"
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
        className="min-h-12 w-full rounded-full border border-line bg-white/80 px-4 text-base text-foreground outline-none transition focus:border-sage-deep focus:ring-2 focus:ring-sage-deep/20"
      />
    </div>
  );
}
