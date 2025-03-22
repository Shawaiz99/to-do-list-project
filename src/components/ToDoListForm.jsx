import { FaPlus } from "react-icons/fa6";

function ToDoListForm() {
  return (
    <form className="d-flex col-11 justify-content-center">
      <div className="form-floating mb-2 col-7">
        <input
          type="text"
          className="form-control"
          id="list-title"
          placeholder="Create a new task..."
        />
        <label htmlFor="list-title">Create a new task...</label>
      </div>
      {/* Figure out how to put the submit inside the border */}
      <button type="submit" className="btn btn-white btn-sm">
        <FaPlus />
      </button>
    </form>
  );
}

export default ToDoListForm;
