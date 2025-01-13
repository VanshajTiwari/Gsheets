import { Request, Response, NextFunction } from "express";

type CORS = (req: Request, res: Response, next: NextFunction) => void;

const allowedOrigins = [
  "http://localhost:3000",
  "https://gsheets-mnf4.vercel.app",
  "https://gsheets-mnf4-git-main-vanshajtiwaris-projects.vercel.app",
  "https://gsheets-mnf4-87ev2ke8p-vanshajtiwaris-projects.vercel.app",
];

let allowedHeaders = ["Authorization", "Content-Type"];

const cors: CORS = (req, res, next) => {
  let origin = req.headers.origin;
  let method = req.method;

  // Check if the origin is allowed
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", "https://gsheets-mnf4.vercel.app"); // Set exact origin
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", allowedHeaders.join(", "));
    res.setHeader("Access-Control-Allow-Credentials", "true");

    // Handle OPTIONS preflight request
    return method === "OPTIONS" ? res.status(200).end() : next();
  }

  // If origin is not present or not allowed, reject with 403
  return !origin ? next() : res.status(403).end();
};

export default cors;
