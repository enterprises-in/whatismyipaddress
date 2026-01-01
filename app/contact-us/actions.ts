"use server";

import { createClient } from "@supabase/supabase-js";
import { headers } from "next/headers";

export async function submitContact(formData: FormData) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const headersList = headers();

  const { error } = await supabase.from("contact_us").insert({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    ip_address: (await headersList).get("x-forwarded-for"),
    user_agent: (await headersList).get("user-agent"),
  });

  if (error) {
    throw new Error("Failed to submit contact form");
  }

  return { success: true };
}
