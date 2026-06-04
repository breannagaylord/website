"use client";

import { useActionState } from "react";
import { subscribeInitialState, submitSubscribe } from "@/app/subscribe/actions";

export function SubscribeForm() {
  const [state, formAction, pending] = useActionState(
    submitSubscribe,
    subscribeInitialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="subscribe-email" className="sr-only">
        Email address
      </label>
      <input
        id="subscribe-email"
        name="email"
        type="email"
        required
        placeholder="Your email address"
        autoComplete="email"
        className="flex-1 rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] placeholder:text-neutral-400 focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-[#9FCE00] px-6 py-3 text-[15px] font-medium text-white transition hover:brightness-95 disabled:opacity-60"
      >
        {pending ? "Subscribing…" : "Subscribe"}
      </button>
      {state.message ? (
        <p
          className={`mt-2 text-sm ${
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
