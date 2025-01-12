import { Request, Response, NextFunction } from "express";

type CORS = (req: Request, res: Response, next: NextFunction) => void;

let regex = /^(https?:\/\/.*)$/;

let allowedHeaders = ["Authorization", "Content-Type"];

const cors: CORS = (req, res, next) => {
  let origin = req.headers.origin;
  let method = req.method;

  if (origin && regex.test(origin)) {
    // Set Access-Control-Allow-Origin to the exact origin that made the request
    res.setHeader("Access-Control-Allow-Origin", origin);

    // Allow all HTTP methods and specified headers
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", allowedHeaders.join(", "));
    res.setHeader("Access-Control-Allow-Credentials", "true");

    // If preflight request (OPTIONS), respond with status 200
    return method === "OPTIONS" ? res.status(200).end() : next();
  }

  // If no origin, pass request through, otherwise, reject with 403
  return !origin ? next() : res.status(403).end();
};

export default cors;
