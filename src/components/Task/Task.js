import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import { useRecoilState } from "recoil";
import { ListOfTasks } from "../../store/store";

export const Task = ({ value, item }) => {
  const [tasksList, setTasksList] = useRecoilState(ListOfTasks);
  const index = tasksList.findIndex((listItem) => listItem === item);

  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  const replaceTaskAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const removeTask = () => {
    const newList = removeItemAtIndex(tasksList, index);
    setTasksList(newList);
  };

  const toggleDoneTask = () => {
    console.log(item);
    const newList = replaceTaskAtIndex(tasksList, index, {
      ...item,
      isCompleted: !item.isCompleted,
    });
    setTasksList(newList);
  };

  return (
    <li className="text-xl flex basis-1/2 px-12 py-6 my-4 bg-white rounded-xl text-black">
      <Button icon="confirmed" click={toggleDoneTask} />
      <span className={item.isCompleted ? "line-through" : ""}>{value}</span>
      <Button icon="remove" click={removeTask} />
    </li>
  );
};

Task.propTypes = {
  value: PropTypes.string,
  item: PropTypes.any,
};
