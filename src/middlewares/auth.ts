import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/api-errors";

interface TokenPayload {
  id: number;
}

export function auth(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new UnauthorizedError("Ação não autorizada.");
  }

  const [, token] = authorization.split(" ");

  jwt.verify(token, process.env.JWT_PASS, (error, id) => {
    if (error) {
      throw new UnauthorizedError("Token Inválido.");
    }

    request.userId = id as TokenPayload;
  });

  return next();
}
