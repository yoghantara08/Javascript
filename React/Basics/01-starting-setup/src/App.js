import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Eat at restaurant",
    amount: 12_0000,
    date: new Date(2020, 3, 20),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 500_000,
    date: new Date(2021, 5, 10),
  },
  {
    id: "e3",
    title: "Buy Computer",
    amount: 23_200_000,
    date: new Date(2022, 4, 8),
  },
  {
    id: "e4",
    title: "Clothes",
    amount: 12000,
    date: new Date(2019, 1, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
