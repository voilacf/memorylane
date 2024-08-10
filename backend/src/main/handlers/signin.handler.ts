import { Request, Response, NextFunction } from 'express';
import { signinUserService } from '../services/user.service';
import { UserServiceStatus } from '../interfaces/user.interface';

export const signinHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Missing value(s)" });
    }
    try {
        const result = await signinUserService(username, password);
        if (result === UserServiceStatus.SUCCESS) {
            return res.status(201).json({ message: "Successfully signed in user" });
        } else if (result === UserServiceStatus.ERR_NAME) {
            return res.status(404).json({ error: "Username not found" });
        } else if (result === UserServiceStatus.ERR_PASSWORD) {
            return res.status(400).json({ error: "Invalid password" });
        }
    } catch (error: any) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Error while trying to interact with database" });
    }
}
