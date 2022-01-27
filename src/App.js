import React, {useContext} from 'react';
import { InputField, Button, Card, TodoList } from './components'
import HeaderContainer from './containers/headerContainer';
import ListContainer from './containers/listContainer';

function App() {
  return (
    <>
      <HeaderContainer />
      <ListContainer />
    </>
  );
}

export default App;

