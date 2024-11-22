import React,{useState} from "react"

function App() {
const [tasks, setTasks] = useState([]);
const [task, setTask] = useState("");
const [editingTaskId, setEditingTaskId] = useState(null);
const [editingText, setEditingText] = useState("");

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



