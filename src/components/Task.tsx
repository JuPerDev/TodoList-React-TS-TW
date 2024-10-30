type Task = {
  task: string;
  handleDeleteTask: () => void;
};

export const Task = ({ task, handleDeleteTask }: Task) => {
  return (
    <div className='flex flex-row justify-around items-center w-full bg-slate-50 py-2 px-4 '>
      <span className='text-xl w-full px-4'>{task}</span>
      <button
        className='bg-rose-500 text-slate-50 py-2 px-4 rounded-lg w-32'
        onClick={handleDeleteTask}
      >
        Borrar Tarea
      </button>
    </div>
  );
};
