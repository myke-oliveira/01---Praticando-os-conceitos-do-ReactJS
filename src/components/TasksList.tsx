import { TasksListBody } from "./TasksListBody";
import { TasksListEmptyBody } from "./TasksListEmptyBody";
import { TasksListHeader } from "./TasksListHeader";

import { Task } from "../App";

interface Props {
  tasks: Task[]
}

export function TasksList({ tasks }: Props) {
  const totalTasks = tasks.length;
  const totalDoneTasks = tasks.filter(task => task.done).length

  return <>
    <TasksListHeader totalTasks={totalTasks} totalDoneTasks={totalDoneTasks} />
    {!tasks
      ? <TasksListEmptyBody />
      : <TasksListBody tasks={tasks} />
    }
  </>
}