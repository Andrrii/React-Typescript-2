import React from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import {BrowserRouter, BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {

  return (
    <BrowserRouter>
        <div>
            <div>
              <NavLink to='/users'>
                Users
              </NavLink>
              <NavLink to = '/todos'>
                Todo List
              </NavLink>
            </div>
            <Route path='/users' exact>
              <UserPage />
            </Route>
            <Route path='/todos' exact>
              <TodosPage />
            </Route>
            <Route path='/users/:id'>
              <UserItemPage />
            </Route>
            <Route path='/todos/:id'>
              <TodoItemPage />
            </Route>
        </div>
    </BrowserRouter>
  );
}

export default App;

/* 

      <EventsExample />
      <Card onClick={(num) => {console.log('click',num)}} variant = {CardVariant.outlined} width="200px" height="200px">
          <button>Button</button>
      </Card>

*/
 