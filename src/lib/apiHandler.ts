import { NextResponse } from "next/server";
import { errorHandler } from "@/lib/errorHandler";

export function withApiHandler<T>(
  fn: (req: Request) => Promise<T>,
  successMessage?: string
) {
  return async (req: Request) => {
    try {
      const data = await fn(req);
      return NextResponse.json(
        {
          success: true,
          message: successMessage || "Request successful",
          data,
        },
        { status: 200 }
      );
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("API Error:", error); // Log error in dev mode
      }

      const err = errorHandler(error);
      return NextResponse.json(
        { success: false, message: err.message },
        { status: err.status }
      );
    }
  };
}
