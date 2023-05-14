import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { ToDoType, UpdateTypes } from "../App";

type ToDoPropsTypes = {
  todo: ToDoType;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateTypes>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  completedTodo: (id: number | string) => void;
  deleteTodo: (id: number | string) => void;
};

const ToDo = ({
  todo,
  setUpdate,
  setTodo,
  completedTodo,
  deleteTodo,
}: ToDoPropsTypes) => {
  const { id, name, completed } = todo;

  const handleUpdate = () => {
    setUpdate({ isUpdating: true, updatingId: id });
    setTodo(name);
  };

  return (
    <li className="px-4 py-6 bg-zinc-600 flex items-center gap-4">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => completedTodo(id)}
      />
      <h3
        className={`text-teal-100 font-semibold text-left ${
          completed ? "line-through decoration-2" : ""
        }`}
      >
        {name}
      </h3>
      <button
        type="button"
        className="ml-auto mr-3 p-2 bg-slate-500 text-slate-200 hover:opacity-80"
        onClick={handleUpdate}
      >
        <FaRegEdit />
      </button>
      <button
        type="button"
        className="p-2 bg-slate-500 text-slate-200 hover:opacity-80"
        onClick={() => deleteTodo(id)}
      >
        <AiOutlineDelete />
      </button>
    </li>
  );
};

export default ToDo;
