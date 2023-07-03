import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    date: new Date(2020, 2, 28),
    amount: 1092.5,
  },
  {
    id: "e2",
    title: "Car Insurance",
    date: new Date(2020, 2, 28),
    amount: 1092.5,
  },
  {
    id: "e3",
    title: "Car Insurance",
    date: new Date(2022, 2, 28),
    amount: 1092.5,
  },
  {
    id: "e4",
    title: "Car Insurance",
    date: new Date(2022, 2, 28),
    amount: 1092.5,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseData = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseData}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
