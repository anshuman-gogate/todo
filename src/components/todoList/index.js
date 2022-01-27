import React, { useState, useContext } from 'react';
import { Button, InputField, TodoItem } from '../../components'
import { TodoContext } from '../../context/TodoContext';
import './styles.css'

function TodoList({ id }) {
  const [input, setInput] = useState('');
  const { list, addTodo } = useContext(TodoContext);

  const todoList = list.find(item => item.id === id).todoList;
  const allTodos = todoList.map(item => {
    return <TodoItem title={item.title} key={item.id} id={item.id} listId={id}/>
  })
  return (
      <div>
          <header className='todo-header'>
            <InputField 
              placeholder="Enter a new todo" 
              className='todo-input'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button buttonText="Add" onClick={() => {
              if (input.replace(/\s/g, '').length) addTodo(id, input);
              setInput('');                                                                                                                                                  
            }}/>                                                                             
          </header>
          <div className="list">
            {allTodos}
          </div>
      </div>
  );
}

export default TodoList;
