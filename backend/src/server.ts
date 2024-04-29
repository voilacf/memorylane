import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

import { registerMiddlewares } from './routes/middleware';
import { Database } from './services/database.service';
import { registerRouetes } from './routes/routes';
import { Db } from 'mongodb';

export class Server {
    private static database: Database;

    public static async start() {
        const app: express.Express = express();

        const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.mjfurro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        this.database = new Database(url);
        await this.database.start();
        await this.database.createCollection("users");

        registerMiddlewares(app);
        registerRouetes(app);

        const port = process.env.PORT || 5000;

        app.listen(port, () => {
            console.log(`Application listening at http://localhost:${port}`);
        });
    }

    public static getDB(): Db {
        if (this.database) {
            return this.database.getMongoDatabase();
        }
        throw new Error("Database is not initialized. Call start() method first.");
    }

}

Server.start();
