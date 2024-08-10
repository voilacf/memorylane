import { NextFunction, Request, Response } from "express";

export const todolistHandler = (req: Request, res: Response, next: NextFunction) => {
    switch (req.method) {
        case "GET":
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            res.redirect("/error");
            break;
    }
}