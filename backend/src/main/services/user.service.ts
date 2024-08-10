import { UserServiceStatus } from "../interfaces/user.interface";
import { Server } from "../server";

/** 
     * Check:
     * is there already an existing user with the same username
     * do both passwords match 
     * does username have at least 3 letters 
     * input validation: strings should only include letters and numbers no special letters expect for the password -> can include * 
     * blacklist < > ; ` ‘ “ | ( { ) } / & = % \ and whitespaces -> do that with middleware?
     */
export async function signupUserService(username: string, password: string): Promise<UserServiceStatus> {
    const db = Server.getDB();
    const user = {
        username: username,
        password: password
    }
    try {
        const usernameCheck = db.collection('users').findOne({ username: username });
        if(!user) {
            console.log("Username already taken");
            return Promise.reject(UserServiceStatus.ERR_NAME);
        }
        await db.collection('users').insertOne(user);
        console.log("added user successfully");
        return Promise.resolve(UserServiceStatus.SUCCESS);
    } catch (error: any) {
        console.error("Error in signup service:", error);
        return Promise.reject(UserServiceStatus.ERR_MONGO);
    }
}

/**
     * Check: 
     * does user exist? 
     * is password correct? 
     * do input validation 
     */
export async function signinUserService(username: string, password: string): Promise<UserServiceStatus> {
    const db = Server.getDB();
    if (!db) {
        console.error('Database is not initialized.');
        return Promise.reject(UserServiceStatus.ERR_MONGO);
    }
    try {
        const user = await db.collection('users').findOne({ username: username });
        if (!user) {
            console.log("Couldn't find user");
            return Promise.reject(UserServiceStatus.ERR_NAME);
            //throw new Error(UserServiceStatus.ERR_NAME);
        }

        if (user.password !== password) {
            console.log(`Couldn't sign in: user: ${user}, p: ${user.password}, prov p: ${password}`);
            return Promise.reject(UserServiceStatus.ERR_PASSWORD);
            //throw new Error(UserServiceStatus.ERR_PASSWORD);
        }

        return Promise.resolve(UserServiceStatus.SUCCESS);

    } catch (error) {
        console.error('Error signing in:', error);
        return Promise.reject(UserServiceStatus.ERR_MONGO);
        //throw new Error(UserServiceStatus.ERR_MONGO);
    }
}

export function deleteUserService(username: string, password: string): UserServiceStatus {
    /**
     * Check:
     * does user exist?
     * is password correct?
     */
    return UserServiceStatus.SUCCESS;
}
