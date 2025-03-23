import { FaTrash } from "react-icons/fa";

function ToDoListCard({list}) {
  return (
    <div className="col-12">
      <div className="card bg-bone-white text-dark">
        <div className="card-body d-flex justify-content-between">
            <div className="d-flex gap-1">
              {/* TODO Change the checkbox to a radial design */}
              <label className="mt-2"><input type="checkbox" name="myCheckbox" value="option" id="zug"/></label>
              <h3 className="card-title m-0">
                {list.task}
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

