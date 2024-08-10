import dotenv from 'dotenv';
dotenv.config();

import { Server } from "../main/server";

describe('Login Tests', () => {
    // variables and properties 
    // http://localhost:5000 

    beforeEach(() => {
        Server.start(process.env.PORT_TEST);
    });

    describe('Log in user correctly', () => {
        it("Username and password are correct", () => {

        });
        it("username is correct, password is invalid", () => {

        });
        it("username is invalid, password is correct", () => {

        });
        it("Neither username nor password is correct", () => {

        });
    });
})