import "./App.css";
import { Form } from "./components/Form/Form";
import { TasksList } from "./components/TasksList/TasksList";

function App() {
  return (
    <div className="w-3/4 bg-blue-600 text-white m-auto flex flex-col items-center justify-center self-center justify-self-center my-8 rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-bold underline text-center py-5">
        To Do App
      </h1>
      <Form />
      <TasksList />
    </div>
  );
}

export default App;
