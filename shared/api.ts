/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}
// src/shared/api.ts

// Common API response type
export interface MyRouteResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

// Example type (User data)
export interface User {
  id: string;
  username: string;
  email: string;
}
