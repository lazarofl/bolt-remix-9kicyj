import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ success: false, message: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await request.json();
    const { name, email, reason, message } = formData;

    // Validate required fields
    if (!name || !email || !reason || !message) {
      return json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    return json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return json(
      { success: false, message: "Failed to process your request" },
      { status: 500 }
    );
  }
};