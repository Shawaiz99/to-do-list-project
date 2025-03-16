import { useState } from 'react';
import Navbar from './components/Navbar';
import ThemeToggler from "./components/ThemeToggler";
import ToDoListCard from './components/ToDoListCard';


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
      <ToDoListCard />
    </>
  );
}

export default App;
