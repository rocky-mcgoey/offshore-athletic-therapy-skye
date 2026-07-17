# Offshore Athletic Therapy

Marketing site for Offshore Athletic Therapy, built with Next.js App Router, React, Tailwind CSS v4, and a small Resend-powered contact form API.

## What This Project Does

The site is intentionally content-driven:

- Page components stay small and mostly compose reusable sections.
- Shared business copy, links, and location details live in `src/data/site.ts`.
- Layout components (`Header`, `Footer`, `Container`) provide the shared shell.
- The contact form validates on both the client and server, then sends email through Resend.

This structure makes the project easier to maintain because content updates and layout changes are mostly separated.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.

## Environment Variables

Create a local environment file if you want the contact form API to send email:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=where_form_messages_should_go
```

Notes:

- If `RESEND_API_KEY` is missing, the API route returns a configuration error instead of sending email.
- If `CONTACT_EMAIL` is missing, the form still submits to the route, but the route will not know where to send the message.
- The booking link shown across the site is managed in `src/data/site.ts`, not in environment variables.

## Useful Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/
  app/                  App Router pages, layout, global styles, and API routes
  components/
    layout/             Shared shell pieces like the header and footer
    sections/           Large page sections such as Hero, Services, and Contact
    ui/                 Smaller reusable building blocks
  data/                 Central site content and business details
  lib/                  Shared helpers for metadata, validation, and utilities
  types/                Shared TypeScript types
```

## Contact Form Flow

1. `src/components/ui/ContactForm.tsx` gathers user input and performs quick client-side validation.
2. The form posts JSON to `src/app/api/contact/route.ts`.
3. The API route validates again using helpers in `src/lib/contact.ts`.
4. If configuration is present, the route sends the email with Resend.

This duplicate validation is intentional. Client validation improves UX, while server validation protects the backend from bad or missing input.

## Where To Edit Common Content

- Business name, navigation, hero copy, services, location, and contact details: `src/data/site.ts`
- Shared SEO metadata helper: `src/lib/metadata.ts`
- Global colors, spacing helpers, and reusable utility classes: `src/app/globals.css`
- Header and footer layout: `src/components/layout/`

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- Resend
