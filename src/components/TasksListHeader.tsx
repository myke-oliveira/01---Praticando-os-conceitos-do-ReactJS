import style from "./TasksListHeader.module.css";

interface Props {
  totalTasks: number;
  totalDoneTasks: number;
}

export function TasksListHeader({ totalTasks, totalDoneTasks }: Props) {
  return (<div className={style.taskListHeader}>
    <div className={style.createdTasksInfo}>
      <span>Tarefas criadas</span>
      <span>{totalTasks}</span>
    </div>
    <div className={style.doneTasksInfo}>
      <span>Concluidas</span>
      <span>{totalDoneTasks} de {totalTasks}</span>
    </div>

  </div>)
}