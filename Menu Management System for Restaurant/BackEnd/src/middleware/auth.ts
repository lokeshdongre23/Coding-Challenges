import { Request, Response, NextFunction } from "express";
import basicAuth from "basic-auth";

const USERNAME = "admin";
const PASSWORD = "password123";

export const basicAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = basicAuth(req);
  if (!user || user.name !== USERNAME || user.pass !== PASSWORD) {
    res.setHeader("WWW-Authenticate", 'Basic realm="MenuAdmin"');
    return res.status(401).send("Unauthorized");
  }
  next();
};
