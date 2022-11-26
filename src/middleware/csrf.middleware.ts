import { NextFunction, Request, Response } from "express";

export const csrfTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
};