import { atom, selector } from "recoil";

const listOfTasks = atom({
  key: "ToDoListState",
  default: [],
});

const filtredTasksList = selector({
  key: 'FilteredList',
  get: ({get}) => get(listOfTasks),
})

export { listOfTasks as ListOfTasks, filtredTasksList};