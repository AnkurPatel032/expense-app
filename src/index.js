import React from 'react';
import { render } from 'react-dom';
import 'react-app-polyfill/ie11';
import AddExpensePage from './pages/AddExpensePage/AddExpensePage';
import DashboardPage from './pages/DashbordPage/DashboardPage';
import { configurStore } from './store/configureStore';

const store=configurStore();
console.log("Store :::"+JSON.stringify(store.getState()));

const App=() =>{

  return(
    <div><h1>Expense Application</h1>
    <DashboardPage/>
    <AddExpensePage/>
    </div>
  );

}

render(<App />,document.getElementById('root'));

