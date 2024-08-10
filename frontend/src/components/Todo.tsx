import { useState } from 'react';
import './Todo.css';
import axios from 'axios';

const Todo = (id:string) => {
    const [formData, setFormData] = useState({
        checked: false,
        todo: ''
    });
    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        const response = axios.post('http://localhost:3000/api/:user/:todolist/todo');
        if (!response) {  // todo check response status 
            console.log("added new todo");
        } else {
            console.log("Something went wrong while adding new todo");
        }
    }
    const handleButtonClick = () => {
        const value = document.getElementById(id);
        // @ts-ignore
        const test = value[value];
        if (test === "OFF"){
            
        } else if (test === "ON") {

        }
    }
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "start"}}>
            <form onSubmit={handleSubmit}>
                <div><input className="checkbox" type="checkbox" style={{width: "25px", height: "25px", margin: "0 15px 0 0"}}/></div>
                <div><input id="todo-input" type="text" placeholder="Add Todo" onChange={handleChange}/></div>
                <div><button id={id} value={"OFF"} type="submit" onSubmit={handleButtonClick}><span>{formData.todo}</span></button></div>
            </form>
        </div>
    );
}

export default Todo;
