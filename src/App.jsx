import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";

import { useState } from "react";

function App() {
  // Tasks State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState(""); // to hold temporary data that will be added as new tasks
  const [updateData, setUpdateData] = useState(""); // to hold the task that is being edited

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      setToDo([...toDo, { id: num, title: newTask, status: false }]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setToDo(toDo.filter((task) => task.id !== id));
  };

  // Mark task as done or completed
  const markDoneTask = (id) => {
    setToDo(toDo.map((task) => (task.id === id ? { ...task, status: !task.status } : task)));
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change task for update
  const changeTask = (e) => {
    setUpdateData({
      ...updateData,
      title: e.target.value,
    });
  };

  // Update task
  const updateTask = () => {
    let removeOldRecord = [...toDo].filter((task) => task.id !== updateData.id);
    setToDo([...removeOldRecord, updateData]);
    setUpdateData("");
  };

  return (
    <div className="App">
      <h1>
        Everyday <span className="yellow_letter">ToDo</span> List
      </h1>

      {/*Update Task & Add Task*/}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          updateTask={updateTask}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      )}

      {/*Display ToDos*/}
      {toDo && toDo.length ? "" : "No Tasks..."}
      <ToDo toDo={toDo} markDoneTask={markDoneTask} setUpdateData={setUpdateData} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
