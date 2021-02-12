import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import InputBox from "../../components/InputBox/InputBox.component";
import "../../pages/DashbordPage/Dashboard.style.css";
import "../../actions/deleteExpense";
import { deleteExpense } from "../../actions/deleteExpense";
import { moment } from "moment";

const DashboardPage = (props) => {

    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        setSearchText(event.target.value);
    }

    const deleteEmployee=(id)=>{
      
        if (window.confirm("Are you sure?")) {
            let payload = {
                newExpense: {
                  id: id
                }
              }
            dispatch(deleteExpense(payload));
          }
    }

    

    return (
        <div>
            <h2>Total expense is: {props.count}</h2>
            <InputBox idText="description" changeHandler={onChangeHandler} typeValue="text" placeholder="Search by description" />
           
            <div className="row-md-12">
                <table className="table table-responsive">
                    <thead className="table-light">
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col" >Date</th>
                        <th scope="col" colSpan="2">Actions</th>
                    </thead>
                    <tbody>
                        {props.expense.filter(expense => {
                            if (searchText === "") { return expense; }
                            else if (expense.description.toLowerCase().includes(searchText.toLocaleLowerCase())) {
                                return expense;
                            }
                        }).map((expense,index) =>
                           
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.date.toString()}</td>
                                <td><Link className="btn btn-primary" to={`/edit/${expense.id}`}>Edit</Link></td>
                                <td> <button className="btn btn-danger"  type="button" onClick={deleteEmployee.bind(this,`${expense.id}`)}>Delete</button></td>
                            </tr>
                        )}</tbody>
                </table> </div>

        </div>
    );

}
//connect() is closure
//connect() is function that return HOC
//function it takes component as a parameter  and return component (HOC)
export default connect((state) => {
    return {
        count: state.expenses.length,
        expense: state.expenses
    }
})(DashboardPage);


/*
closure function

function add(number)
{
    return functon(number2)
    {
        return number * number2;
    }
}

//technique 1
let addInnerFunc=add(3); // 3+number2
let addInnerFunc2=add(18); //18+number2

addInnerFunc(5);// 8
addInnerFunc2(15);//33

//technique 2
add(3)(5);
add(18)(15);

*/


