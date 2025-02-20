import { AppError } from "./errors";

export function errorHandler(error: unknown) {
  const isDev = process.env.NODE_ENV === "development";

  if (error instanceof AppError) {
    return {
      success: false,
      message: isDev ? error.message : "Something went wrong!",
      status: error.statusCode,
    };
  }

  return {
    success: false,
    message: isDev ? (error as Error).message : "Internal Server Error",
    status: 500,
  };
}
