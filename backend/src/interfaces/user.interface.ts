import { TodoList } from "./todoList.interface";

export interface User {
	id: string,
	username: string,
	password: string,
	todoList: TodoList[]
}

export enum UserServiceStatus {
	ERR_NAME = "Error: username invalid",
	ERR_PASSWORD = "Error: password invalid",
	ERR_PASSWAORD_MISMATCH = "Error: passwords do not match",
	ERR_MONGO = "Error: internal error while writing to Mongo",
	SUCCESS = "Success"
}
