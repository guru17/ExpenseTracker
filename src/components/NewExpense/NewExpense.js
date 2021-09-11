import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const addExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.onSaveExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseData={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
