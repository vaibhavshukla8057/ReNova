import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handlePhotoUpload } from "./routes/upload-photo.ts";

import { handleMyRoute } from "./routes/my-route";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes
  app.post("/api/upload-photo", handlePhotoUpload);

  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  app.get("/api/my-endpoint", handleMyRoute);

  return app;
}


import { MyRouteResponse, User } from "@shared/api";

const getUser = (): MyRouteResponse<User> => {
  return {
    success: true,
    data: {
      id: "123",
      username: "vibhu",
      email: "vibhu@example.com"
    }
  };
};

console.log(getUser());
