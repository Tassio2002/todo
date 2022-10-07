import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import uuid from 'react-uuid';
import './App.css';

const App = () => {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const setTaskValue = (event) => {
    setValue(event.target.value);
  };

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        title: value,
        checked: false,
      },
    ]);
    erase();
  };

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
    console.log(todo);
  };

  const createTask = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const setInputValue = (todo) => {
    todos.map((obj) => (obj.id === todo.id ? setValue(todo.title) : obj));
  };

  const updateTask = (todo) => {
    setInputValue(todo);
    setTodos(
      todos.map((obj) => (obj.id === todo.id ? { ...obj, title: value } : obj))
    );
    console.log(todos);
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
        <input
          type="text"
          placeholder="O que precisa ser feito?"
          className="new-todo"
          value={value}
          onChange={setTaskValue}
          onKeyDown={createTask}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                onClick={() => onToggle(todo)}
                onKeyPress={() => onToggle(todo)}
                role="button"
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button
                className="update"
                type="button"
                onClick={() => updateTask(todo)}
              >
                <MdEdit size={28} />
              </button>
              <button
                className="remove"
                type="button"
                onClick={() => onRemove(todo)}
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
