import { Request, Response, NextFunction } from "express";

type CORS = (req: Request, res: Response, next: NextFunction) => void;

let allowedHeaders = ["Authorization", "Content-Type"];

const cors: CORS = (req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "gsheets-mnf4-git-main-vanshajtiwaris-projects.vercel.app",
    "https://gsheets-mnf4.vercel.app",
    "https://gsheets-mnf4-vanshajtiwaris-projects.vercel.app/#/auth/sign-in"
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin as string)) {
    res.setHeader("Access-Control-Allow-Origin", origin??"");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", allowedHeaders.join(", "));
    res.setHeader("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    return next();
  }

  // If the origin is not allowed, return 403
  return res.status(403).end();
};

export default cors;
