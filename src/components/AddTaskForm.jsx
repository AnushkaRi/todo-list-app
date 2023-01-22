const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
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
  );
};

export default AddTaskForm;