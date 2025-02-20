// Base App Error
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// Validation Error (400)
export class ValidationError extends AppError {
  constructor(message: string = "Invalid request data") {
    super(message, 400);
  }
}

// Authentication Error (401)
export class AuthError extends AppError {
  constructor(message: string = "Unauthorized access") {
    super(message, 401);
  }
}

// Forbidden Error (403)
export class ForbiddenError extends AppError {
  constructor(message: string = "Access forbidden") {
    super(message, 403);
  }
}

// Not Found Error (404)
export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(message, 404);
  }
}

// API Error (Custom server-side issues)
export class ApiError extends AppError {
  constructor(
    message: string = "API encountered an error",
    statusCode: number = 500
  ) {
    super(message, statusCode);
  }
}
