import { v4 as uuidV4 } from "uuid";
import { CreateNewTaskBar } from './components/CreateNewTaskBar'
import { Header } from './components/Header'
import { TasksList } from './components/TasksList';
import "./global.css";

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

function App() {

  const tasks: Task[] = [
    {
      id: uuidV4(),
      text: "Projeto 1 de React",
      done: false
    },
    {
      id: uuidV4(),
      text: "Estudar espanhol",
      done: true
    }
  ]

  return (
    <>
      <Header />
      <CreateNewTaskBar />
      <TasksList tasks={tasks} />
    </>
  )
}

export default App;
