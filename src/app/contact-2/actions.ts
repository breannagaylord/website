"use server";

export type ContactState = { ok: boolean; message: string };

export const contactFormInitialState: ContactState = { ok: false, message: "" };

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all fields." };
  }
  return {
    ok: true,
    message:
      "Thanks — your message has been recorded. Connect a mail provider or API route to deliver it.",
  };
}
