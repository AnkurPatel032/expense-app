import React from 'react';
import { render } from 'react-dom';
import 'react-app-polyfill/ie11';
import { configurStore } from './store/configureStore';
import { Provider } from "react-redux";
import AppRouter from './router/AppRouter';


const expenseStore=configurStore();
//console.log("Store :::"+JSON.stringify(expenseStore.getState()));


//console.log(`The Object State is ${JSON.stringify(expenseStore.getState(),null,'\t')}`);

const App=() =>{

  return(<Provider store={expenseStore }>    
    <div>
    <AppRouter/>
    </div>
    </Provider>

  );

}

render(<App />,document.getElementById('root'));



/*

const App=() =>{

  return(   
    <div>
      <h1>React Application</h1>
    </div>
  );
}

//HOC::take component as the parameter and return a component(function or class but return JSX)

const WithAccessButton=(WrappedComponent)=>{

  /*const HocComponent=()=>{
    return <div>
       
       <WrappedComponent/>
       <button>SecureAccess</button>
    </div>
    
  }
  return HocComponent;  */
  /*


return()=>{
  return(<div>
       
    <WrappedComponent/>
    <button>SecureAccess</button>
 </div>);
}

}

const SecuredComponent=WithAccessButton(App);

render(<SecuredComponent/>,document.getElementById('root'));

*/