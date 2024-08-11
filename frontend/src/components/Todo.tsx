import { useEffect, useState } from 'react';
import './Todo.css';

interface Todo {
  text: string;
  completed: boolean;
}

const TodoComponent: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    //todo: make database call here instead 
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [currentTodo, setCurrentTodo] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    //todo: make database call here instead 
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTodo(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentTodo.trim()) {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex].text = currentTodo;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: currentTodo, completed: false }]);
      }
      setCurrentTodo("");
    }
  };

  const toggleComplete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);

    setTimeout(() => {
        const newTodos = updatedTodos.filter((_, i) => i !== index);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }, 1000);
  };

  const handleEdit = (index: number) => {
    setCurrentTodo(todos[index].text);
    setEditIndex(index);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <ul style={{display:"flex", flexDirection: "column", maxHeight: "500px", overflow:"scroll"}}>
        {todos.map((todo, index) => (
          <li key={index} style={{borderBottom: "1pt solid #ffffffd0", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
              style={{width: "30px", height: "30px"}}
            />
            {editIndex === index ? (
              <input
                type="text"
                value={currentTodo}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                autoFocus
                style={{width: "50vw", fontSize: "22px", height: "35px", padding: "15px", border: "none", backgroundColor: "transparent", borderRadius: "40px"}}
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                  cursor: "pointer",
                  width: "50vw",
                  fontSize: "22px",
                  height: "35px"
                }}
                onClick={() => handleEdit(index)}
              >
                {todo.text}
              </span>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={currentTodo}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Add new todo by starting typing here"
        style={{width: "50vw", marginTop: "50px", border: "none", height: "40px", backgroundColor: "transparent", textAlign: "center", fontSize: "24px", color: "white", borderRadius: "50px"}}
      />
    </div>
  );
};

export default TodoComponent;
