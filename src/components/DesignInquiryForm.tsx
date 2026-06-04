"use client";

import { useActionState } from "react";
import { designFormInitialState, submitDesignInquiry } from "@/app/design/actions";

export function DesignInquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitDesignInquiry,
    designFormInitialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="design-type" className="mb-1 block text-sm font-medium text-[var(--heading)]">
          Project Type
        </label>
        <select
          id="design-type"
          name="projectType"
          required
          defaultValue=""
          className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        >
          <option value="" disabled>Select project type</option>
          <option value="full-home">Full Home Design</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="multiple-rooms">Multiple Rooms</option>
          <option value="single-room">Single Room</option>
          <option value="styling">Styling / Refresh</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="design-location" className="mb-1 block text-sm font-medium text-[var(--heading)]">
          Project Location
        </label>
        <input
          id="design-location"
          name="projectLocation"
          type="text"
          required
          placeholder="City, neighborhood, or zip code"
          className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] placeholder:text-neutral-400 focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        />
      </div>

      <div>
        <label htmlFor="design-vision" className="mb-1 block text-sm font-medium text-[var(--heading)]">
          Your Vision
        </label>
        <textarea
          id="design-vision"
          name="clientsVision"
          required
          rows={3}
          placeholder="Tell me about your style, goals, and what you're hoping to achieve…"
          className="w-full resize-y rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] placeholder:text-neutral-400 focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        />
      </div>

      <div>
        <label htmlFor="design-timeline" className="mb-1 block text-sm font-medium text-[var(--heading)]">
          Timeline
        </label>
        <select
          id="design-timeline"
          name="timeline"
          required
          defaultValue=""
          className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        >
          <option value="" disabled>When are you hoping to start?</option>
          <option value="asap">ASAP</option>
          <option value="1-3-months">1–3 months</option>
          <option value="3-6-months">3–6 months</option>
          <option value="6-plus-months">6+ months</option>
          <option value="just-exploring">Just exploring</option>
        </select>
      </div>

      <div>
        <label htmlFor="design-investment" className="mb-1 block text-sm font-medium text-[var(--heading)]">
          Planned Interior Investment
        </label>
        <select
          id="design-investment"
          name="investment"
          required
          defaultValue=""
          className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        >
          <option value="" disabled>Select a range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-15k">$5,000 – $15,000</option>
          <option value="15k-30k">$15,000 – $30,000</option>
          <option value="30k-75k">$30,000 – $75,000</option>
          <option value="75k-plus">$75,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="design-contact" className="mb-1 block text-sm font-medium text-[var(--heading)]">
          Best Contact Number
        </label>
        <input
          id="design-contact"
          name="contactNumber"
          type="tel"
          required
          placeholder="(480) 555-1234"
          className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-[15px] text-[#7A7A7A] placeholder:text-neutral-400 focus:border-[#9FCE00] focus:outline-none focus:ring-1 focus:ring-[#9FCE00]"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-[#9FCE00] px-8 py-3 text-[15px] font-medium text-white transition hover:brightness-95 disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send Inquiry"}
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
