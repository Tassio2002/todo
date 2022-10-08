import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

import './styles.css'

const List = ({ todos, onToggle, onRemove, updateTask }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            className={['todo', todo.checked ? 'checked' : ''].join(' ')}
            onClick={() => onToggle && onToggle(todo)}
            onKeyPress={() => onToggle && onToggle(todo)}
            role="button"
            tabIndex={0}
          >
            {todo.title}
          </span>
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
  );
};

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      //trocar string para number
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTogle: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
};
export default List;
