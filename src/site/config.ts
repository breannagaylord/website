/** Contact details mirrored from breannagaylord.com (update email when client confirms). */
export const siteConfig = {
  title: "Breanna Gaylord Design",
  description:
    "Breanna Gaylord design & create — designing unique and functional homes + my own home.",
  phoneDisplay: "480-510-1308",
  phoneTel: "tel:+14805101308",
  contactPhoneDisplay: "202-555-0188",
  contactPhoneTel: "tel:+12025550188",
  addressLines: ["2360 Hood Avenue", "San Diego, CA, 92123"] as const,
  /** Original site used a Cloudflare-protected mail link; replace with the client’s live address if different. */
  emailDisplay: "info@breannagaylord.com",
  emailHref: "mailto:info@breannagaylord.com",
} as const;
