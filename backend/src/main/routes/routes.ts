import express from "express";

import { signupHandler } from "../handlers/signup.handler";
import { signinHandler } from "../handlers/signin.handler";
import { homeHandler } from "../handlers/home.handler";
import { todolistHandler } from "../handlers/todolist.handler";
import { errorHandler } from "../handlers/error.handler";
import { todoHandler } from "../handlers/todo.handler";

export const registerRouetes = (app: express.Express): void => {

    app.post('/api/signup', signupHandler);
    app.post('/api/signin', signinHandler);

    // redirect here with middleware
    app.all('/error', errorHandler);

    // use middleware
    app.get('/home', homeHandler);

    // implement cookie to get current User 
    app.all('/api/:user/todolists', todolistHandler);
    app.all('/api/:user/:todolist/todos', todoHandler);
}
