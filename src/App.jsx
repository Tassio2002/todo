import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Input from './components/Input';
import List from './components/List';

const App = () => {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        title: value,
        checked: false,
      },
    ]);
  };

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">To do</h1>
      </header>
      <section className="main">
        <Input onNewTodo={onNewTodo} />
        <List todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
};

export default App;
