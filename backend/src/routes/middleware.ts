import express, { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
dotenv.config;
import * as bodyParser from "body-parser";
import cors from 'cors';
import helmet from 'helmet'

export const registerMiddlewares = (server: express.Express): void => {
    // apply middlewares
    // server.use(middleware);

    // setting formats
    server.use(bodyParser.text({ limit: "50mb" }));
    server.use(bodyParser.json({ limit: "50mb" }));
    server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

    // other
    server.use(cors());
    server.use(helmet());
}

// for authentication -> check whether user is signed in or not -> if so redirct to home / todolist , if not redirect to log in 
function middleware(req: Request, res: Response, next: NextFunction) {
    // next();
    return res.redirect(`http://localhost:${process.env.FRONTEND_PORT}/signin`);
}
