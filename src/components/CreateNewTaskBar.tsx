import { PlusCircle } from "@phosphor-icons/react";
import style from "./CreateNewTaskBar.module.css";
import { ChangeEvent, useState } from "react";
import { Task } from "../App";
import { v4 as uuidV4 } from "uuid";

interface Props {
  tasks: Task[],
  setTasks: (tasks: Task[]) => void;
}

export function CreateNewTaskBar({ tasks, setTasks }: Props) {

  const [newTaskText, setNewTaskText] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.currentTarget.value)
  }

  function handleCreateNewTask() {
    const newTask: Task = {
      id: uuidV4(),
      text: newTaskText,
      done: false
    }

    setTasks([newTask, ...tasks])

    setNewTaskText('')
  }
  return (
    <div className={style.taskBar}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleInputChange}
      />
      <button onClick={handleCreateNewTask}>
        Criar
        <PlusCircle />
      </button>
    </div>
  )
}