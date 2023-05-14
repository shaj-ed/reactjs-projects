import { ToDoType, UpdateTypes } from "../App";
import ToDo from "./ToDo";

type ToDoListPropsTypes = {
  todos: ToDoType[];
  setUpdate: React.Dispatch<React.SetStateAction<UpdateTypes>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  completedTodo: (id: number | string) => void;
  deleteTodo: (id: number | string) => void;
};

const ToDoList = ({
  todos,
  setUpdate,
  setTodo,
  completedTodo,
  deleteTodo,
}: ToDoListPropsTypes) => {
  return (
    <section>
      <ul className="flex flex-col justify-center py-6 gap-4">
        {todos.map((todo) => {
          const { id } = todo;
          return (
            <ToDo
              key={id}
              todo={todo}
              setUpdate={setUpdate}
              setTodo={setTodo}
              completedTodo={completedTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ToDoList;
