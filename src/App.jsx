import { useState } from 'react';
import Navbar from './components/Navbar';
import ThemeToggler from "./components/ThemeToggler";
import ToDoList from './components/ToDoList';
import ToDoListForm from './components/ToDoListForm';


function App() {

  const [lists, setList] = useState([]);

  const addList = (newList) => {
    console.log('New Task Added');
    setList((prev) => [...prev, newList]);
  };

  const removeList = () => {
    setList(null);
  }

  return (
    <>
      <Navbar>
        <ThemeToggler/>
      </Navbar>
      <div className='d-flex justify-content-center'>
        <ToDoListForm />
      </div>
      <ToDoList />
    </>
  );
}

export default App;
