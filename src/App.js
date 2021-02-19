import React from 'react'
import {useState} from 'react'
import Addtodo from './component/Addtodo/Addtodo'
import List from './component/List/List';
import TodoItem from './component/todo-item.js/TodoItem';
import "./App.css"







function App() {

  
  

  return (
    <div className="App">

   <Addtodo></Addtodo>
    <List></List>
    <TodoItem></TodoItem>      
    </div>
  );
}

export default App;
