"use server";

export type DesignInquiryState = {
  message: string;
  ok: boolean;
};

export const designFormInitialState: DesignInquiryState = {
  message: "",
  ok: false,
};

export async function submitDesignInquiry(
  _prevState: DesignInquiryState,
  formData: FormData,
): Promise<DesignInquiryState> {
  // In production, wire this to an email API or database.
  // For now, acknowledge receipt.
  const fields = {
    projectType: formData.get("projectType"),
    projectLocation: formData.get("projectLocation"),
    clientsVision: formData.get("clientsVision"),
    timeline: formData.get("timeline"),
    investment: formData.get("investment"),
    contactNumber: formData.get("contactNumber"),
  };

  if (!fields.projectType || !fields.projectLocation || !fields.clientsVision || !fields.timeline || !fields.investment || !fields.contactNumber) {
    return { message: "Please fill out all fields.", ok: false };
  }

  return {
    message: "Thanks, Breanna will be in touch soon!",
    ok: true,
  };
}
