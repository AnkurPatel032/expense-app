import React from "react";
import ActionButton from "../../components/ActionButton/ActionButton.component";
import InputBox from "../../components/InputBox/InputBox.component";


const AddExpensePage = () => {
    return (
        <div>
          <form>
            <label>Description:</label>
            <InputBox typeValue="text" placeholder="Enter description"/>
            <label>Amount:</label>
            <InputBox  typeValue="text" placeholder="Enter amount"/>
            <label>Date:</label>
            <InputBox  typeValue="text" placeholder="Enter date"/>
            <ActionButton buttonText="Add Expense"/>
          </form>
        </div>
    );

}
export default AddExpensePage;