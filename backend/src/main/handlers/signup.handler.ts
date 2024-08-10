import { Request, Response } from "express";
import { signupUserService } from "../services/user.service";
import { UserServiceStatus } from "../interfaces/user.interface";

export const signupHandler = async (req: Request, res: Response) => {

    const { username, password, confirmedPassword } = req.body;
    console.log(password + " and c: " + confirmedPassword);

    if (!username || !password || !confirmedPassword) {
        return res.status(400).json({ error: 'missing value(s)' });
    }
    if (!(password === confirmedPassword)) {
        return res.status(400).json({ error: 'passwords do not match' });
    }

    try {
        const result = await signupUserService(username, password);
        if (result === UserServiceStatus.ERR_NAME) {
            return res.status(400).json({ message: 'Username already taken' });
        }
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error: any) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Error while trying to write to database" });
    }
}
