import { RequestHandler } from "express";
import { MyRouteResponse } from "@shared/api";

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyRouteResponse = {
    success: true,
    message: 'Hello from my endpoint!'
  };
  res.json(response);
};