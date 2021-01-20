import {createStore} from "redux";
import {expenseReducer} from "../reducers/expensesReducer";

export const configurStore=()=>{

    const store=createStore(expenseReducer);
    return store;
}