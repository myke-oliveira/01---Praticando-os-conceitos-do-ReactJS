import { Task } from "../App";
import { Trash } from "@phosphor-icons/react";
import style from "./TaskListBody.module.css";

interface Props {
  tasks: Task[]
}

export function TasksListBody({ tasks }: Props) {
  return tasks.map(task => (
    <div className={style.task}>
      <div>
        <input type="radio" name="" id="" checked={task.done} />
        {task.text}
      </div>
      <Trash />
    </div>
  ))
}
