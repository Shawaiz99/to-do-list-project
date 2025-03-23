import { useState } from 'react';
import Navbar from './components/Navbar';
import ThemeToggler from './components/ThemeToggler';
import ToDoList from './components/ToDoList';
import ToDoListForm from './components/ToDoListForm';

function App() {
  const [lists, setList] = useState([]);

  const addList = (newList) => {
    console.log('New Task Added');
    setList((prev) => [...prev, newList]);
  };

  const removeList = () => {
    setList([]);
  };

  return (
    <>
      <Navbar>
        <ThemeToggler />
      </Navbar>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="col-12 col-sm-11 col-md-10 col-lg-8 p-2">
          <ToDoListForm />
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
