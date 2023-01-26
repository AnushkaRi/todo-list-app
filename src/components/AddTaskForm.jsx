const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <div className="form_container">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          placeholder="Enter your task..."
          className="input"
        ></input>
        <div className="btn_container">
          <button onClick={addTask} className="btn">
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
