import { FormEvent } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import InputField from "./InputField";
import { ToDoType, UpdateTypes } from "../App";

type InputFormTypes = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  update: UpdateTypes;
  addTodo: (todo: ToDoType) => void;
  updateTodo: () => void;
};

const InputForm = ({
  todo,
  setTodo,
  update,
  addTodo,
  updateTodo,
}: InputFormTypes) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (update.isUpdating) {
      updateTodo();
      setTodo("");
    } else {
      const newTodo = {
        id: crypto.randomUUID(),
        name: todo,
        completed: false,
      };

      addTodo(newTodo);
      setTodo("");
    }
  };

  return (
    <form className="flex justify-center items-start" onSubmit={handleSubmit}>
      <InputField
        htmlFor="task name"
        type="text"
        value={todo}
        placeholder="Enter task name"
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="px-4 bg-teal-700 self-stretch text-2xl text-teal-200 hover:opacity-80"
      >
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default InputForm;
