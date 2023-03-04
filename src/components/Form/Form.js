import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { ListOfTasks } from "../../store/store";

export const Form = () => {
  const [value, setValue] = useState("");
  const setTodoList = useSetRecoilState(ListOfTasks);

  const addTask = (event) => {
    event.preventDefault();
    setTodoList((oldToDo) => [
      ...oldToDo,
      {
        id: String(Math.floor(Math.random() * 100)),
        text: value,
        isCompleted: false,
      },
    ]);
    setValue("");
  };

  const onChange = (event) => setValue(event.target.value);
  return (
    <form className="flex items-center justify-around w-full mb-5">
      <input
        type="text"
        className="basis-2/4 px-2 outline-none text-black leading-8 rounded-xl"
        value={value}
        onChange={onChange}
      />
      <button
        value="Create !"
        className="basis-1/4 bg-white rounded-xl text-black leading-8"
        onClick={addTask}
      >
        {" "}
        Create !
      </button>
    </form>
  );
};
