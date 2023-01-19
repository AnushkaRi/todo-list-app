import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function App() {
  // Tasks State
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

  // Temp State
  const [newTask, setNewTask] = useState(""); // to hold temporary data that will be added as new tasks
  const [updateData, setUpdateData] = useState(""); // to hold the task that is being edited

  // Add task
  const addTask = () => {
    //
  };

  // Delete task
  const deleteTask = (id) => {
    //
  };

  // Mark task as done or completed
  const markDoneTask = (id) => {
    //
  };

  // Cancel update
  const cancelUpdate = () => {
    //
  };

  // Change task for update
  const changeTask = (e) => {
    //
  };

  // Update task
  const updateTask = () => {
    //
  };

  return (
    <div className="App">
      <h1>Everyday ToDo List</h1>

      {/*Update Task*/}
      <div className="row">
        <div className="col">
          <input className="form_container"></input>
        </div>
        <div className="col-auto">
          <button className="btn btn_success">Update</button>
          <button className="btn btn_warning">Cancel</button>
        </div>
      </div>

      {/*Add Task*/}
      <div className="row">
        <div className="col">
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)} className="form_container"></input>
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn_success">
            Add Task
          </button>
        </div>
      </div>

      {/*Display ToDos*/}
      {toDo && toDo.length ? "" : "No Tasks..."}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="task_container">
                <div className={task.status ? "done" : ""}>
                  <span className="task_number">{index + 1}</span>
                  <span className="task_text">{task.title}</span>
                </div>
                <div className="icons_container">
                  <span title="Completed / Not Completed">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span title="Edit">
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  <span title="Delete">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default App;
