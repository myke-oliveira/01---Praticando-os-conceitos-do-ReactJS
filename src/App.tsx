import { v4 as uuidV4 } from "uuid";
import { CreateNewTaskBar } from './components/CreateNewTaskBar'
import { Header } from './components/Header'
import { TasksList } from './components/TasksList';
import "./global.css";
import { useState } from "react";

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <>
      <Header />
      <CreateNewTaskBar tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App;
