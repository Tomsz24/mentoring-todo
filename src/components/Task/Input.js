import { useState } from "react";
import { replaceTaskAtIndex, findIndex } from "../helpers/helpers";
import { useRecoilState } from "recoil";
import { ListOfTasks } from "../../store/store";
import PropTypes from "prop-types";

export const Input = ({ text, item }) => {
  const [tasksList, setTasksList] = useRecoilState(ListOfTasks);
  const [textValue, setTextValue] = useState(text);

  const handleOnChange = (event) => {
    setTextValue(event.target.value);
  };

  const finishEditing = () => {
    const newList = replaceTaskAtIndex(tasksList, findIndex(tasksList, item), {
      ...item,
      text: textValue,
      isEdit: false,
    });
    setTasksList(newList);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <button onClick={finishEditing}>Modify</button>
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};
