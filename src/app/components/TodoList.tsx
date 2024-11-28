"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  // add of items
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);

    setInputValue("");
  };

  // add values id
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // delete todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-teal-300 to-blue-700">
      <header className=" text-black py-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-bold">
            TODOLIST BY KHAZRA SHAIKH
          </h1>
          <p className="font-serif mt-3">
            Organize your work with our Next JS Todo List App
          </p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-slate-600 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow p-2 border border-grey-400 rounded-lg text-black"
                placeholder="Add a new task ...."
              />
              <button
                onClick={addTodo}
                className="ml-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-sky-400"
              >
                Add
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg
                    ${
                      todo.completed ? "bg-red-400 line-through" : "bg-sky-300"
                    }`}
              >
                <span>{todo.text}</span>

                <div>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="px-2 py-1 text-sm bg-green-700 text-white rounded-lg hover:bg-green-500"
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-2 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-red-800"
                  >
                    Delete
                  </button>
                  
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TodoList;
