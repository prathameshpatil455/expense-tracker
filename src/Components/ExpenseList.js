import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    {
      id: 12213121,
      name: "Shopping",
      cost: 522220,
    },
    {
      id: 12213121,
      name: "MAY",
      cost: 50,
    },
    {
      id: 12213121,
      name: "BIKE",
      cost: 503333,
    },
    {
      id: 12213121,
      name: "Rain",
      cost: 503,
    },
    {
      id: 12213121,
      name: "Bhaji",
      cost: 30,
    },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => {
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />;
      })}
    </ul>
  );
};

export default ExpenseList;
