import React, { useState, useContext } from 'react';
import { InputField, Button} from '../components'
import { TodoContext } from '../context/TodoContext';

function HeaderContainer() {
  const [input, setInput] = useState('');
  const { createNewList } = useContext(TodoContext);

  return (
    <header className='app-header'>
        <InputField 
            placeholder="Create a new todo list" 
            className='app-header__input'
            value={input}
            onChange = {(e) => {
                setInput(e.target.value)
            }}
        />
        <Button buttonText="Add" 
            onClick = {() => {
                if (input.replace(/\s/g, '').length) createNewList(input);
                setInput('');
            }}
        />
    </header>
  );
}

export default HeaderContainer;
