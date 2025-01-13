import { Request, Response, NextFunction } from "express";

type CORS = (req: Request, res: Response, next: NextFunction) => void;

const allowedHeaders = ["Authorization", "Content-Type"];

const cors: CORS = (req, res, next) => {
  const origin = req.headers.origin;
  const method = req.method;
  const allowedOrigin = process.env.FRONTEND_URL; // Use the environment variable

  // Check if the origin matches the allowed origin
  if (origin && origin === allowedOrigin) {
    console.log(origin);
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", allowedHeaders.join(", "));
    res.setHeader("Access-Control-Allow-Credentials", "true");

    // Handle OPTIONS preflight requests
    if (method === "OPTIONS") {
      return res.status(200).end();
    }
    return next();
  }

  // If origin is not allowed, log and reject
  console.error(`Blocked CORS for Origin: ${origin}`);
  return res.status(403).json({ error: "CORS not allowed for this origin." });
};

export default cors;
