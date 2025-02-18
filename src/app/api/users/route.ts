import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/users
export async function GET() {
  try {
    const users = await prisma.user.findMany(); // Fetch all users
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch users", error },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const users = await prisma.user.create({
      data: {
        name: "Test User",
        email: "test@example.com",
      },
    }); // Fetch all users
    return NextResponse.json(
      { success: true, message: "User added successfully", data: users },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to add user", error },
      { status: 500 }
    );
  }
}
