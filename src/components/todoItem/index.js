import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { FaTrash } from 'react-icons/fa'
import './styles.css'

function TodoItem({ title, id, listId }) {
  const {list, removeTodo, toggleIsComplete} = useContext(TodoContext);
  const todos = list.find(item => item.id === listId).todoList;
  const isCompleteValue = todos.find(item => item.id === id).isComplete;
  const [completed, setCompleted] = useState(isCompleteValue);

  const styles = {
      fontStyle: "italic",
      color: "#5f5f5f",
      textDecoration: "line-through"
  }

  return (
      <div className='todo'>
          <input type="checkbox" checked={completed} onChange={(e) => {
            toggleIsComplete(listId, id);
            setCompleted(prev => !prev)
          }}/>
          <p className="todo-title" style={completed ? styles : null}>{title}</p>
          <button
            onClick={() => {
              removeTodo(listId, id)
            }}
            className='del-btn'
          ><FaTrash /></button>
      </div>
  );
}

export default TodoItem;
