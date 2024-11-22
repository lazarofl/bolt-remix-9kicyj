import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { EmailService } from "~/services/email.server";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ success: false, message: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await request.json();
    const { email, password } = formData;

    // Validate required fields
    if (!email || !password) {
      return json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate authentication (replace with actual auth logic)
    const isValidCredentials = password.length >= 8;

    if (!isValidCredentials) {
      return json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Send login notification email
    const emailService = EmailService.getInstance();
    const emailSent = await emailService.sendLoginLink(email);

    if (!emailSent) {
      console.warn("Failed to send login notification email");
    }

    return json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          email,
          name: "John Doe", // Simulated user data
          role: "user",
        },
        token: Buffer.from(`${email}:${Date.now()}`).toString('base64'),
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
};