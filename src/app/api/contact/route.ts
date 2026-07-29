import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Process valid inquiry (Log / Store / Dispatch Notification)
    console.log("[Admissions Inquiry Received]:", result.data);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your admissions inquiry has been received. Our team will contact you shortly.",
        data: result.data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting your inquiry. Please try calling the school office.",
      },
      { status: 500 }
    );
  }
}
