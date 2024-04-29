import { Request, Response, NextFunction } from 'express';
import { signinUserService } from '../services/user.service';
import { UserServiceStatus } from '../interfaces/user.interface';

export const signinHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.sendStatus(400).json({ error: "missing value(s)" });
    }
    const result = await signinUserService(username, password);
    if (result === UserServiceStatus.SUCCESS) {
        return Promise.resolve(res.sendStatus(200).json({ message: "successfully registered user" }));
    } else {
        return Promise.reject(res.status(400).json(result));
    }
    // const user = testDB.collection('users').findOne(username);
    // if (!user) {
    //     console.log("Couldn't find user");
    //     return res.status(400).json({ error: "Username invalid" });
    // }
    // if (username.password !== password) {
    //     console.log("Couldn't sign in");
    //     return res.status(400).json({ error: "Password invalid" });
    // }

}

