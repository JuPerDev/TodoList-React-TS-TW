import { ChangeEvent, useState } from "react";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    setTodoList((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const handleDeleteTask = (id: number) => {
    setTodoList((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <section className='flex flex-col w-full justify-center items-center mt-4'>
      <h1 className='text-3xl text-slate-600 mb-4 '>Todo App</h1>
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Enter todo'
          className='outline-none caret-rose-500 ring-2 ring-rose-500 rounded-md p-2 text-center focus:ring-4 focus:ring-rose-500 transition-all duration-500'
          onKeyDown={handleKeyDown}
        />
        <button
          type='button'
          onClick={handleAddTask}
          className='bg-rose-500 text-white py-2 px-6 rounded-md ml-4'
        >
          Añadir Tarea
        </button>
      </div>
      <TodoList todoList={todoList} handleDeleteTask={handleDeleteTask} />
    </section>
  );
};
