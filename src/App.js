import React,{useState} from "react"

function App() {
const [tasks, setTasks] = useState([]);
const [task, setTask] = useState("");
const [editingTaskId, setEditingTaskId] = useState(null);
const [editingText, setEditingText] = useState("");
// const [details, setDetails] = useState({
//   name:"zzainab"
// });

// const handleNameChange = ()=>{
//   // details.name = "Zainab Naveed"
//   details = {
//     ...details,
//     name : "Zainab Naveed"
//   }
//   console.log(details)
//   setDetails(details)
// }

  
const addTask = () => {
 if (task.trim() !== "") {


setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
setTask("");
 }
  };

const toggleTaskCompletion = (id) => {
  setTasks(
    tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
 )
    );
  };

const deleteTask = (id) => {
setTasks(tasks.filter((t) => t.id !== id));
};

const startEditing = (id, text) => {
setEditingTaskId(id);
setEditingText(text);
};

const saveTask = (id) => {
setTasks(
  tasks.map((t) =>
    t.id === id ? { ...t, text: editingText } : t
  )
    );
setEditingTaskId(null);
setEditingText("");
  };

 return (
<div className="bg-pink-800 min-h-screen flex items-center justify-center">
<div className="bg-pink-700 p-4 rounded-lg shadow-lg w-full max-w-md">
  <h1>
    {details.name}
  </h1>
  <button
  onClick={handleNameChange}
  >Change</button>
<h1 className="text-3xl font-bold text-center text-white mb-4">
To-Do App
</h1>
<div className="flex mb-4">
<input
type="text"
value={task}
onChange={(e) => setTask(e.target.value)}
placeholder="Add a new task..."
className="flex-1 p-2 border border-gray-200 rounded focus:outline-none"
  />
<button
  onClick={addTask}
  className="bg-blue-700 text-white ml-2 px-3 rounded-3xl hover:bg-blue-600 text-[25px]"
>
+
 </button>
</div>
<ul className="space-y-2">
{tasks.map((t) => (
 <li
  key={t.id}
  className={`flex items-center justify-between p-2 border rounded-lg ${
  t.completed ? "bg-green-100" : "bg-white"
   }`}
    >
{editingTaskId === t.id ? (
   <>
  <input
type="text"
value={editingText}
onChange={(e) => setEditingText(e.target.value)}
className="flex-1 p-2 border rounded-lg focus:outline-none"
 />
<button
 onClick={() => saveTask(t.id)}
className="bg-green-500 text-white px-4 py-1 ml-2 rounded-lg hover:bg-green-600"
  >
Save
  </button>
     </>
) : (
  <>
<input
type="checkbox"
checked={t.completed}
onChange={() => toggleTaskCompletion(t.id)}
 className="mr-2"
    />
<span
  onClick={() => toggleTaskCompletion(t.id)}
  className={`flex-1 cursor-pointer ${
   t.completed ? "line-through text-gray-500" : "text-gray-800"
 }`}
>
{t.text}
</span>
  <button
  onClick={() => startEditing(t.id, t.text)}
  className="float-right bg-blue-700 mx-1 text-white p-1 px-3 rounded text-[15px]"
  >
Edit 
</button>

<button
  onClick={() => deleteTask(t.id)}
  className="float-right bg-red-600 mx-1 text-white p-1 rounded text-[15px]"
>
  Delete
</button>
  </>
)}
  </li>
))}
</ul>
 </div>
    </div>
  );
}

export default App;



// export default function App (){
// const [Task, setTask] = useState("")
// const [tasks, setTasks] = useState([])
// const [editTask, setEditTask] = useState(null)
// const[newTask, setNewTask] = useState("")

// const editing = (t) => {
// setEditTask(t.id);
// setNewTask(t.newTask);
// }

// const saveTask = () => {
//   if (newTask.trim() !== "") { 
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === editTask ? { ...task, text: newTask } : task
//       )
//     );
//     setEditTask(null); 
//     setNewTask(""); 
//   }
// };


// // const saveTask=()=>
// //    (newTask.trim()!== "");
// // {
// //   setTasks(prevTasks)=>
// // prevTasks.map((task)=>
// //   (task.id===editTask)?
// //   {...task, text:newTask}:Task)
// // );
// // setEditTask(null);
// // setNewTask("");
// // };

// const addTask = () => {
//   if (Task.trim() !== "") {
// setTasks([...tasks, { id: Date.now(), text: Task}]);
// setTask("");
// }
//   };
 
// const deleteTask = (id) => {
//    setTasks(tasks.filter((t) => t.id !== id));
// }

// return (
// <div className="bg-pink-900 flex flex-wrap items-center justify-center h-[100vh]">
// <div className="bg-pink-700 rounded-xl text-white m-2 p-2">

// <h1 className="text-3xl m-3 mb-5 pl-12">To-Do-App</h1>
// <input
// className="h-[32px] ml-2 w-[240px] rounded text-blue-900"
// type="text"
// value = {Task}
// placeholder="Enter Your To-DO"
// onChange={(e) => setTask(e.target.value)}
// >
// </input>
//  <button 
//  onClick = {addTask}
//  className="bg-blue-800 text-2xl p-1 px-3 ml-3 mr-1 rounded-3xl">
//   +
//  </button>   

//  <ol className="mt-4">
 

//  <>
// {tasks.map((t) => (
//   <li key={t.id} className="bg-white text-blue-900 rounded p-1 mb-3">
//     {t.text}
//     <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//     ) : (
//       <span>{t.name}</span>
//     )}
//     <button 
//     className="float-right bg-blue-700 mx-1 text-white p-1 px-2 rounded text-[10px]"
//     onClick={() =>editing(t.id)}>Edit</button>
//   {/* </div> */}
// ))} 

 
 
 
//   <button
//   className="float-right bg-red-600 text-white p-1 rounded text-[10px]"
//   onClick={() =>deleteTask(t.id)}
//    >
//     delete
//   </button>
// </>
//   {/* {tasks.map((t) => (
//   <div key={t.id}>
//     {editTask === t.id ? (
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//     ) : (
//       <span>{t.name}</span>
//     )}
//     <button 
//     className="float-right bg-blue-700 mx-1 text-white p-1 px-2 rounded text-[10px]"
//     onClick={() =>editing(t.id)}>Edit</button> */}
//   </div>
// ))} 

// {/* 


 
//  {tasks.map((t)=>(
//   key={t.id}
//   {editTask===t.id?}(
//     <input
//     type="text"
//     value="newTask"
//     onChange={(e)=>setNewTask(e.target.value)}
//     />
//   ):(
//     <span>{Task}</span>
//   )
//  )
 
// )
//  }
  
//   <button
//   className="float-right bg-blue-700 mx-1 text-white p-1 px-2 rounded text-[10px]"
//   onClick={() => editing (t.id)}
//    >
//     edit
//   </button> */}
//    */}
  
//   {editTask === t.id && (
//   <button onClick={saveTask} className="bg-green-600 text-white p-1 rounded text-[10px]">
//     Save
//   </button>
// )}

  
  
  
  
//   {/* {editTask===Task.id} && <button onClick = {saveTask}>
//     save
//   </button> */}
//   </li>
//    ))}
//   </ol>
//   </div>
//   </div>
//   );
// } 
 
 
 
 
 
 
 
 
 