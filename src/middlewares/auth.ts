import { NextFunction, Request, Response } from "express";

export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
  console.log("Verifying token...", req);
}