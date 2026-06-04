"use server";

export type SubscribeState = {
  message: string;
  ok: boolean;
};

export const subscribeInitialState: SubscribeState = {
  message: "",
  ok: false,
};

export async function submitSubscribe(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const email = formData.get("email");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { message: "Please enter a valid email address.", ok: false };
  }

  // In production, wire to an email service or database.
  return {
    message: "You're subscribed! Thanks for joining.",
    ok: true,
  };
}
