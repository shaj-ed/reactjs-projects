import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";

export type ToDoType = {
  id: number | string;
  name: string;
  completed: boolean;
};

export type ToDoListType = ToDoType[];

export type UpdateTypes = {
  isUpdating: boolean;
  updatingId: number | string;
};

const toDoList: ToDoListType = [
  {
    id: 1,
    name: "Buy groceries for this week's meal plan",
    completed: false,
  },
  {
    id: 2,
    name: "Do laundry and fold clothes",
    completed: true,
  },
  {
    id: 3,
    name: "Pay monthly bills (electricity, internet, phone)",
    completed: false,
  },
  {
    id: 4,
    name: "Call mom and catch up on family news",
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState<ToDoListType>(toDoList);
  const [todo, setTodo] = useState<string>("");
  const [update, setUpdate] = useState<UpdateTypes>({
    isUpdating: false,
    updatingId: "",
  });

  const addTodo = (todo: ToDoType) => {
    setTodos((prevTodo) => [todo, ...prevTodo]);
  };

  const completedTodo = (id: number | string) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodo);
  };

  const deleteTodo = (id: number | string) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodo);
  };

  const updateTodo = () => {
    const updateTodo = todos.map((item) =>
      item.id === update.updatingId
        ? {
            ...item,
            name: todo,
          }
        : item
    );

    setTodos(updateTodo);
    setUpdate({ isUpdating: false, updatingId: "" });
  };

  return (
    <>
      <Header />
      <main className="p-8 text-center w-full max-w-xl mx-auto">
        <InputForm
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          update={update}
          updateTodo={updateTodo}
        />
        <ToDoList
          todos={todos}
          setUpdate={setUpdate}
          setTodo={setTodo}
          completedTodo={completedTodo}
          deleteTodo={deleteTodo}
        />
      </main>
    </>
  );
};

export default App;
