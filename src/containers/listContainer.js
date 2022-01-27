import React, {useContext} from 'react';
import { Card, TodoList } from '../components';
import { TodoContext } from '../context/TodoContext';

function ListContainer() {
    const {list} = useContext(TodoContext);
    let allCards;
    if(list) {
        allCards = list.map(item => {
            return (
                <Card title={item.title} key={item.id} id={item.id}>
                    <TodoList id={item.id}/>
                </Card>
            )
        })
    }

    return (
        <div className='card-container'>
            {allCards}
        </div>
    );
}

export default ListContainer;
