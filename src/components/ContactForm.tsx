"use client";

import { useActionState } from "react";
import {
  contactFormInitialState,
  submitContact,
} from "@/app/contact-2/actions";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    contactFormInitialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="sr-only">
          Your Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your Name"
          autoComplete="name"
          className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] placeholder:text-neutral-400 focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="Your Email"
          autoComplete="email"
          spellCheck={false}
          className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] placeholder:text-neutral-400 focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Message"
          className="h-[136px] w-full resize-y rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] placeholder:text-neutral-400 focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-[#9FCE00] px-8 py-3 text-[15px] font-medium text-white transition hover:brightness-95 disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send Message"}
        </button>
      </div>
      {state.message ? (
        <p
          className={`text-sm ${
            state.ok ? "text-green-800" : "text-red-700"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
