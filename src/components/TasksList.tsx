import { TasksListBody } from "./TasksListBody";
import { TasksListEmptyBody } from "./TasksListEmptyBody";
import { TasksListHeader } from "./TasksListHeader";

import { Task } from "../App";

interface Props {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}

export function TasksList({ tasks, setTasks }: Props) {
  const totalTasks = tasks.length;
  const totalDoneTasks = tasks.filter(task => task.done).length

  return <>
    <TasksListHeader totalTasks={totalTasks} totalDoneTasks={totalDoneTasks} />
    {tasks.length <= 0
      ? <TasksListEmptyBody />
      : <TasksListBody tasks={tasks} setTasks={setTasks}/>
    }
  </>
}