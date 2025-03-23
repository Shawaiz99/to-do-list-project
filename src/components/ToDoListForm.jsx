import { FaPlus } from 'react-icons/fa6';

function ToDoListForm() {
  return (
    <form className="d-flex col-12 justify-content-center">
      <div className="input-group">
        <div className="form-floating">
          <input
            type="text"
            className="form-control d-inline"
            id="list-title"
            placeholder="Create a new task..."
          />
          <label htmlFor="list-title">Create a new task...</label>
        </div>
        <span className='input-group-text bg-transparent'>
          <button type="submit" className="btn btn-white btn-sm d-inline">
            <FaPlus />
          </button>
        </span>
      </div>
      {/* Figure out how to put the submit inside the border */}
    </form>
  );
}

export default ToDoListForm;
