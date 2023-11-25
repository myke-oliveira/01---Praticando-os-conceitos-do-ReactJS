import { Task } from "../App";
import { Trash } from "@phosphor-icons/react";
import style from "./TaskListBody.module.css";
import { ChangeEvent, MouseEvent } from "react";

interface Props {
  tasks: Task[],
  setTasks: (tasks: Task[]) => void;
}

export function TasksListBody({ tasks, setTasks }: Props) {

  function handleToggleTaskDone(event: ChangeEvent<HTMLInputElement>) {
    const taskId = event.currentTarget.dataset.taskId;
    setTasks(tasks.map(task => {
      if (task.id !== taskId) return task

      task.done = !task.done

      return task
    }))
  }

  function handleDeleteTask(event: MouseEvent<HTMLButtonElement>) {
    console.log(event)
    setTasks(tasks.filter(task => task.id !== event.currentTarget.dataset.taskId))
  }

  return tasks.map(task => (
    <div key={task.id} className={style.task}>
      <div>
        <input
          type="radio"
          checked={task.done}
          onChange={handleToggleTaskDone}
          data-task-id={task.id}
        />
        {task.text}
      </div>
      <button
        onClick={handleDeleteTask}
        data-task-id={task.id}
      >
        <Trash />
      </button>
    </div>
  ))
}
