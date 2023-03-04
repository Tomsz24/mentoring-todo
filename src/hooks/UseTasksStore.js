import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { ListOfTasks } from "../store/store";

export const useTasksStore = (taskId, item) => {
  const [tasksList, setTasksList] = useRecoilState(ListOfTasks);
  const index = useMemo(
    () => tasksList.findIndex((task) => task.id === taskId),
    [tasksList]
  );

  const removeTask = () => {
    setTasksList([...tasksList.slice(0, index), ...tasksList.slice(index + 1)]);
  };

  const toggleDoneTask = () => {
    setTasksList([
      ...tasksList.slice(0, index),
      {
        ...item,
        isCompleted: !item.isCompleted,
      },
      ...tasksList.slice(index + 1),
    ]);
  };

  return { removeTask, toggleDoneTask };
};
