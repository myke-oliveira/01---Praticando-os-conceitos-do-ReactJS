import { PlusCircle } from "@phosphor-icons/react";
import style from "./CreateNewTaskBar.module.css";

export function CreateNewTaskBar() {
  return (
    <div className={style.taskBar}>
      <input type="text" name="" id="" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle />
      </button>
    </div>
  )
}