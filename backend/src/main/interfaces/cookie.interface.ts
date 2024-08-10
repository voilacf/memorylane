import { User } from "./user.interface";

export interface Cookie {
    user: User;
    userDataCache: any;
    session: number;
    sessionID: string;
}
