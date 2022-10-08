import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css'

const Input = ({ onNewTodo }) => {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [value, setValue] = useState('');

  const setTaskValue = (event) => {
    setValue(event.target.value);
  };

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const createTask = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input
      type="text"
      placeholder="O que precisa ser feito?"
      className="new-todo"
      value={value}
      onChange={setTaskValue}
      onKeyDown={createTask}
    />
  );
};

Input.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default Input;
