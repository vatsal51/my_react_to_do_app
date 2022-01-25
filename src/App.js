import './App.css';
import Header from './Header';
import Tasks from './Tasks';
import { useState } from "react";
import AddTask from './AddTask';


function App() {
  const [showAddTask,setshowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
    id:1,
    text:"doctor appointment",
    day: "13th FEB",
    reminder:false
},
{
    id:2,
    text:"doctor appointment2",
    day: "13th FEB",
    reminder:false
},
{
    id:3,
    text:"doctor appointment3",
    day: "13th FEB",
    reminder:false
},
])

//deletes tasks
const deleteTasks = (id) => {
  console.log("delete",id);
  setTasks(tasks.filter((task)=>(task.id!==id)

  ))
}

//toggle reminder
const toggleReminder = (id) => {
console.log("reminder");
setTasks(
  tasks.map((task)=>
  task.id===id ? {...task, reminder: !task.reminder} : task
  )
  )
}

//add tasks
const addTask = (task) => {
console.log(task);
const id = Math.floor(Math.random() * 10000) + 1;
console.log(id);
const newTask = {id,...task}
setTasks([...tasks,newTask])

}


  return (
    <div className="container">
     <Header title="Task Tracker" onAdd={()=>setshowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
     {showAddTask && <AddTask onAdd={addTask}/>} 
     {tasks.length > 0 ? (<Tasks  tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />) : ("No task to show")}
    </div>
  )
  }

export default App;
