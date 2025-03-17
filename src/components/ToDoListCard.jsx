import { FaTrash } from "react-icons/fa";

function ToDoListCard() {
  return (
    <div className="col-6 m-5">
      <div className="card bg-bone-white text-dark">
        <div className="card-body d-flex justify-content-between">
            <div className="d-flex">
              <label><input type="radio" name="myRadio" value="option" /></label>
              <h3 className="card-title m-0">
                Create a new task...
              </h3>
            </div>
            <div className="text-secondary">
              <FaTrash />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoListCard

