import { useState } from "react"
import ToDoListCard from "./ToDoListCard";

function ToDoList() {
    const [lists, setLists] = useState([
        {
            id: 1001,
            task: 'Walk the Dog'
        },
        {
            id: 1002,
            task: 'Make the Bed'
        },
        {
            id: 1003,
            task: 'Study for Class'
        },
    ]);

  return (
    <div className="d-flex flex-column gap-1 align-items-center">
      {lists.map((list) => (
        <ToDoListCard key={list.id} list={list}/>
      ))}
    </div>
  )
}

export default ToDoList