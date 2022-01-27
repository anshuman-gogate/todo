import React, {useState, createContext, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../hooks';

const TodoContext = createContext();
const { Provider } = TodoContext;

function ContextProvider({ children }) {
    const [list, setList] = useLocalStorage('todo-list', []);
    
    // Function to create a new list
    function createNewList(title) {
        const newId = uuidv4();
        const newList = {
            id: newId,
            title: title,
            todoList: []
        }
        const temp = [newList, ...list]
        setList(temp);
    }

    // Function to delete a list
    function removeList(id) {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    // Function to add a new item to the to do list
    function addTodo(id, title) {
        const todoId = 'ti' + uuidv4();
        const newTodo = {
            id: todoId,
            title: title,
            isComplete: false
        }

        const updatedList = list.map(item => {
            if(item.id === id) {
                item.todoList.push(newTodo);
            }
            return item;
        })

        setList(updatedList);
    }

    // Function to remove an item from the todo list
    function removeTodo(listId, id) {
        const updatedList = list.map(item => {
            if(item.id === listId) {
                const newTodolist = item.todoList.filter(item => item.id !== id);
                item.todoList = newTodolist;
            }
            return item;
        })
        setList(updatedList);
    }

    // Function to update isComplete
    function toggleIsComplete(listId, id) {
        const updatedList = list.map(item => {
            if(item.id === listId) {
                const newTodolist = item.todoList.map(item => {
                    if(item.id === id) item.isComplete = !item.isComplete;
                    return item;
                });
                item.todoList = newTodolist;
            }
            return item;
        })
        setList(updatedList);
    }

    return (
        <Provider 
            value={{createNewList, list, removeList, addTodo, removeTodo, toggleIsComplete}}
        >
            {children}
        </Provider>
    )
}

export { TodoContext, ContextProvider }