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
export function signupUserService(username: string, password: string): any {
    const db = Server.getDB();
    const user = {
        username: username,
        password: password
    }
    try {
        db.collection('users').insertOne(user);
        console.log("added user successfully");
        return UserServiceStatus.SUCCESS;
    } catch (error: any) {
        console.error("Error in signup service:", error);
        return error;
    }
}

/**
     * Check: 
     * does user exist? 
     * is password correct? 
     * do input validation 
     */
export async function signinUserService(username: string, password: string): Promise<UserServiceStatus> {
    try {
        const db = Server.getDB();
        if (!db) {
            console.error('Database is not initialized.');
            return Promise.reject(UserServiceStatus.ERR_MONGO);
        }
        const user = await db.collection('users').findOne({ username: username });
        if (!user) {
            console.log("Couldn't find user");
            return Promise.reject(UserServiceStatus.ERR_NAME);
        }

        if (user.password !== password) {
            console.log("Couldn't sign in");
            return Promise.reject(UserServiceStatus.ERR_PASSWORD);
        }

        return Promise.resolve(UserServiceStatus.SUCCESS);
    } catch (error) {
        console.error('Error signing in:', error);
        return Promise.reject(UserServiceStatus.ERR_MONGO);
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
