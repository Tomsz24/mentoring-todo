import { Button } from "../Button/Button";
import { useTasksStore } from "../../hooks/UseTasksStore";

export const Task = (item) => {
  const { removeTask, toggleDoneTask } = useTasksStore(item.id, item);

  return (
    <li className="text-xl flex basis-1/2 px-12 py-6 my-4 bg-white rounded-xl text-black">
      <Button icon="confirmed" click={toggleDoneTask} />
      <span className={item.isCompleted ? "line-through" : ""}>
        {item.text}
      </span>
      <Button icon="remove" click={removeTask} />
    </li>
  );
};
