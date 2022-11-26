import { NextFunction, Request, Response } from "express";
import { isAuthenticated } from "../utils/firebase.utils";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const sessionCookie = req.cookies.session || "";
    let error = isAuthenticated(sessionCookie);

    if(error != undefined) {
        next();
    }
    
    res.status(401).json({
        status: 'error',
        errorCode: 401,
        message: 'user not authenticated'
    })
}