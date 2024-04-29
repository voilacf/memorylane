import React from 'react';
import './TodoList.css'

function TodoList(){
        return (
            <div className='list' style={{backgroundColor:"teal"}}>
                <p className='list-title'>Title</p>
                <span className='list-number'>X</span>
            </div>
        );
}

export default TodoList;