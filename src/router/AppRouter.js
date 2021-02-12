import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Error from "../components/Error/Error.component";
import Header from "../components/Header/Header.component";
import AddExpensePage from "../pages/AddExpensePage/AddExpensePage";
import DashboardPage from "../pages/DashbordPage/DashboardPage";
import EditExpensePage from "../pages/EditExpensePage/EditExpensePage";

const appMenu=[
           {
               "text":"Dashboard",
               "linkUrl":"/"
           },
           {
            "text":"Add Expense",
            "linkUrl":"/add"
           }
        
]

const AppRouter=()=>{
    return(
        <Router>
            <Header title="Expense Application" menus={appMenu}></Header>
          <Switch>
              <Route path="/" exact={true} component={DashboardPage} />
              <Route path="/add" component={AddExpensePage} />
              <Route path="/edit/:id" component={EditExpensePage} />
              <Route path="/:id"  component={DashboardPage} />
              <Route component={Error}/>
             
          </Switch>
        </Router>)
}
export default AppRouter;