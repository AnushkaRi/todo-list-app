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
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Mark task as done or completed
  const markDoneTask = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="App">
      <h1>Everyday ToDo List</h1>

      {/*Update Task*/}
      {updateData ? (
        <>
          <div className="row">
            <div className="col">
              <input
                className="form_container"
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
              ></input>
            </div>
            <div className="col-auto">
              <button className="btn btn_success" onClick={updateTask}>
                Update
              </button>
              <button className="btn btn_warning" onClick={cancelUpdate}>
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}

      {/*Display ToDos*/}
      {toDo && toDo.length ? "" : "No Tasks..."}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="task_container">
                  <div className={task.status ? "done" : ""}>
                    <span className="task_number">{index + 1}</span>
                    <span className="task_text">{task.title}</span>
                  </div>
                  <div className="icons_container">
                    <span title="Completed / Not Completed" onClick={(e) => markDoneTask(task.id)}>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {task.status ? null : (
                      <span
                        title="Edit"
                        onClick={() =>
                          setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false })
                        }
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
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
