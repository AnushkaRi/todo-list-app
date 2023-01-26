const UpdateForm = ({ updateData, updateTask, changeTask, cancelUpdate }) => {
  return (
    <>
      <div className="form_container">
        <input
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
          type="text"
          placeholder="Update task..."
          className="input"
        ></input>
        <div className="btn_container">
          <button className="btn" onClick={updateTask}>
            Update
          </button>
          <button className="btn btn_cancel" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
