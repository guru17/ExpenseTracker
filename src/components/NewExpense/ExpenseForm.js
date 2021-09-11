import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //Option 1
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const [isTitleValid, setTitleValid] = useState(true);
  const [isAmountValid, setAmountValid] = useState(true);
  const [isDateValid, setDateValid] = useState(true);

  const titleChangeHandler = (event) => {
    if (event.target.value.length > 0) setTitleValid(true);
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    if (event.target.value.length > 0) setAmountValid(true);
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    if (event.target.value.length > 0) setDateValid(true);
    setDate(event.target.value);
  };

  //Option 2

  // const [getInput, setInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  // const titleChangeHandler = (event) => {
  //     //setTitle(event.target.value);
  //     setInput({
  //         ...setInput,
  //         enteredTitle: event.target.value
  //     });
  // }

  // const amountChangeHandler = (event) => {
  //     setInput({
  //         ...setInput,
  //         enteredAmount: event.target.value
  //     });
  // }

  // const dateChangeHandler = (event) => {
  //     setInput({
  //         ...setInput,
  //         enteredDate: event.target.value
  //     });
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    let isFormValid = true;
    if (enteredTitle.length === 0) {
      setTitleValid(false);
      isFormValid = false;
    }
    if (enteredAmount.length === 0) {
      setAmountValid(false);
      isFormValid = false;
    }
    if (enteredDate.length === 0) {
      setDateValid(false);
      isFormValid = false;
    }
    console.log(isFormValid);
    if (!isFormValid) return;
    const expeneData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.onAddExpenseData(expeneData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div
          className={`new-expense__control ${!isTitleValid ? "isValid" : ""}`}
        >
          <label>Title</label>
          <input
            // style={{
            //   borderColor: !isTitleValid ? "red" : "black",
            //   background: !isTitleValid ? "red" : "white",
            // }}
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div
          className={`new-expense__control ${!isAmountValid ? "isValid" : ""}`}
        >
          <label>Amount</label>
          <input
            // style={{
            //   borderColor: !isAmountValid ? "red" : "black",
            //   background: !isAmountValid ? "red" : "white",
            // }}
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div
          className={`new-expense__control ${!isDateValid ? "isValid" : ""}`}
        >
          <label>Date</label>
          <input
            // style={{
            //   borderColor: !isDateValid ? "red" : "black",
            //   background: !isDateValid ? "red" : "white",
            // }}
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
