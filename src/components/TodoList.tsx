import { Task } from "./Task";

type TaskProps = {
  todoList: string[];
  handleDeleteTask: (id: number) => void;
};

export const TodoList = ({ todoList, handleDeleteTask }: TaskProps) => {
  return (
    <section className='mt-5 flex flex-col w-full max-w-3xl justify-center items-center gap-y-2'>
      {todoList.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleDeleteTask={() => handleDeleteTask(index)}
        ></Task>
      ))}
    </section>
  );
};
