const UpdateForm = ({ updateData, updateTask, changeTask, cancelUpdate }) => {
  return (
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
  );
};

export default UpdateForm;
