

import React, { useState } from "react";

function Todolist() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodolist([
      ...todolist,
      {
        id: Date.now(),
        text: todo,
        completed: false,
      },
    ]);

    setTodo("");
  };

  const toggleCompleted = (id) => {
    setTodolist(
      todolist.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodolist(todolist.filter((item) => item.id !== id));
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    addBtn: {
      padding: "10px 20px",
      backgroundColor: "#409eff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
    },
    deleteBtn: {
      padding: "5px 10px",
      backgroundColor: "#f56c6c",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter the task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={styles.input}
        />

        <button style={styles.addBtn} onClick={addTodo}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todolist.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleCompleted(item.id)}
            style={{
              ...styles.listItem,
              textDecoration: item.completed
                ? "line-through"
                : "none",
              color: item.completed ? "gray" : "black",
            }}
          >
            <span>{item.text}</span>

            <button
              style={styles.deleteBtn}
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;