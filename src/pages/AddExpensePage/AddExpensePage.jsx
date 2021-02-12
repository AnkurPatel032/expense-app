import React, { useState } from "react";

import { connect } from "react-redux";
import ActionButton from "../../components/ActionButton/ActionButton.component";
import InputBox from "../../components/InputBox/InputBox.component";
import {addExpense} from "../../actions/addExpense";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { moment } from "moment";

//React 16.8.0
class  AddExpensePage extends React.Component{

  
  constructor(props){
    super(props);
    this.state={
      "description":'',
      "amount":'',
      "date":''
    }
    // this.handleChange = this.handleChange.bind(this);
  }
   
  // handleChange(date) {
  
  //  var d=date;
  //  console.log("Select date:"+d);
  //  var curr_date = d.getDate();
  //  var curr_month = d.getMonth() + 1; //Months are zero based
  //  var curr_year = d.getFullYear();
  //  var myDate=curr_date + "-" + curr_month + "-" + curr_year;
  //  console.log("Converted Date:"+myDate);

  //   this.setState({
  //     "date": myDate
  //   })
  // }


  onTextChange=(event)=>{
    this.setState({
           [event.target.name]:event.target.value
    })
  }
 
 

  onActionButtonClick=(event)=>{
  
    let payload={
            newExpense:{
              id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
              description:this.state.description,
              amount:this.state.amount,
              date:this.state.date
             
            }
           
    }
    this.props.dispatch(addExpense(payload)); 
    event.preventDefault();
    this.props.history.push("/");
  } 
  
   convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }
  
    
  render(){
  

    return (

        <div className="col-md-12 ms-md-auto">
          <form class="row g-3">
          <div class="col-md-12">
            <label className="form-label">Description:</label>
            <InputBox idText="description" changeHandler={this.onTextChange} textValue={this.state.description} typeValue="text" placeholder="Enter description"/>
           
           </div>
           <div class="col-md-12">
            <label className="form-label">Amount:</label>
            <InputBox idText="amount" changeHandler={this.onTextChange} textValue={this.state.amount} typeValue="text" placeholder="Enter amount"/>
           </div>
           <div class="col-md-12">
            <label className="form-label">Date:</label>
           <input name="date" type="hidden" value={this.state.date} />
         
           <DatePicker
             selected={this.state.date}
             dateFormat="dd/MM/yyyy"
             onChange={(value)=> {
          //   let cDate=this.convertDate(value); 
      //    var event = new Date(value);
       //  let cdate = JSON.stringify(event)
         //    cdate = cdate.slice(1,11)
         var today  = new Date(value.toLocaleDateString("en-US"));
              console.log("today:"+today) ;
                 this.setState({date: today})
                }}
            />
              </div>    
            <ActionButton clickHandler={this.onActionButtonClick} buttonText="Add Expense"/>
            
          </form>
        </div>
    );
  }
}
export default connect((state) => {
  return {
      count: state.expenses.length,
      expense: state.expenses
  }
}) (AddExpensePage);