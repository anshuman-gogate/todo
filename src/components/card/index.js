import React, {useContext} from 'react';
import { Button } from '../../components'
import { TodoContext } from '../../context/TodoContext';
import './styles.css'

function Card({ className, title, id, children }) {
  const { removeList } = useContext(TodoContext);
  return (
    <div className={`container ${className}`}>
        <h2 className="card-title">{title}</h2>
        { children }
        <Button 
          buttonText="delete" 
          className='card-btn'
          onClick = {() => {
            removeList(id);
          }}
        />
    </div>
  );
}

export default Card;
