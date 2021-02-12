import React, { useState, useEffect } from "react";
import ActionButton from "../../components/ActionButton/ActionButton.component";
import InputBox from "../../components/InputBox/InputBox.component";
import { connect, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getExpense } from "../../actions/getExpense";

const EditExpensePage = (props) => {


  let history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch()



  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [Id, setId] = useState("");

  useEffect(() => {
    console.log("Use effect calling..")
    loadExpenseData();
  }, [])



  const loadExpenseData = () => {

    const result = props.result.filter(c => { if (c.id == id) { return c; } });
    // console.log("filter data:"+JSON.stringify(result));
    //  dispatch(getExpense(id));
    setDescription(result[0].description);
    setAmount(result[0].amount);
    setDate(result[0].date);
    setId(result[0].id)

  }

  // const {description,amount,date}=state;

  const onTextChange = (e) => {
    console.log([e.target.name] + ":" + e.target.value);
    if(e.target.name==="description"){ setDescription(e.target.value);}
    if(e.target.name==="amount"){setAmount(e.target.value);}
    if(e.target.name==="date"){setDate( e.target.value);}
    //     setState({...state,[e.target.name]:e.target.value });     

  }
  const onActionButtonClick = (e) => {

    let payload = {
      newExpense: {
        id: Id,
        description: description,
        amount: amount,
        date: date

      }
    }
   dispatch(getExpense(payload));
   e.preventDefault();
    history.push("/");
  }

  return (
    <div className="col-md-12 ms-md-auto">
      <form class="row g-3">
        <div class="col-md-12">
          <label className="form-label">Description:</label>
          <InputBox idText="description" changeHandler={(e) => { onTextChange(e) }} textValue={description} typeValue="text" placeholder="Enter description" />
        </div>
        <div class="col-md-12">
          <label className="form-label">Amount:</label>
          <InputBox idText="amount" changeHandler={(e) => { onTextChange(e) }} textValue={amount} typeValue="text" placeholder="Enter amount" />
        </div>
        <div class="col-md-12">
          <label className="form-label">Date:</label>
          <InputBox idText="date" changeHandler={(e) => { onTextChange(e) }} textValue={date} typeValue="text" placeholder="Enter date" />
        </div>

        <ActionButton clickHandler={(e) => { onActionButtonClick(e) }} buttonText="Update Expense" />

      </form>
    </div>
  );
}

export default connect((state) => {
  return {
    result: state.expenses
  }
})(EditExpensePage);