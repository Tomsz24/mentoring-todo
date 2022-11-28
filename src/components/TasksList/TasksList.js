import { Task } from "../Task/Task";
import { useRecoilValue } from "recoil";
import { filtredTasksList } from "../../store/store";

export const TasksList = () => {
  const tasksList = useRecoilValue(filtredTasksList);
  return (
    <div>
      <ul>
        {tasksList.map((task) => (
          <Task value={task.text} key={task.id} />
        ))}
      </ul>
    </div>
  );
};
