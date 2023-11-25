import ListPlaceholderIcon from "../assets/ListPlaceholderIcon.svg";
import style from "./TasksListEmptyBody.module.css";

export function TasksListEmptyBody() {
  return <div className={style.tasksListEmptyBody}>
    <img src={ListPlaceholderIcon} alt="" />
    <strong>Você não possui tarefas cadastradas</strong>
    <span>Crie tarefas e organize seus itens a fazer</span>
  </div>
}