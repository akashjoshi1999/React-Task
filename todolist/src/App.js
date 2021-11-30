import './App.css';
import Item from './components/Item';
import React, { useState, useEffect } from 'react'
import ShowItem from './components/ShowItem';

const App = () => {
  const [show, setShow] = useState(false);
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addItem = (fname, lname) => {
    let no;
    if (todos.length === 0) {
      no = 0;
    } else {
      console.log("gdsg")
      no = todos[todos.length - 1].no + 1;
    }
    const creatItem = {
      no: no,
      fname: fname,
      lname: lname
    }
    Settodos([...todos, creatItem]);
    console.log(todos);
    if (localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
  const onItem = (item) => {
    console.log("somthing", item);
    Settodos(todos.filter((e) => {
      return e !== item;
    }))
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const onEdit = (item) => {

  }
  const [todos, Settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="App">
      <h1 className="App-h1">
        ToDoList
      </h1>
      <Item addItem={addItem} show={show} />
      <ShowItem items={todos} onItem={onItem} onEdit={onEdit} />
    </div>
  );
}

export default App;
