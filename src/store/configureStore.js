import {createStore,combineReducers} from "redux";
import {expenseReducer} from "../reducers/expensesReducer";
import {filterReducer} from "../reducers/filterReducer";

export const configurStore=()=>{

    const store=createStore(combineReducers({"expenses":expenseReducer,"filter":filterReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}