import { Todo } from "./todo.interface";

export interface TodoList {
	name: string,
	todos: Todo[],
	unchecked: number,
	backgroundColor: string
}

