import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Eat at restaurant",
      amount: 12_0000,
      date: new Date(2021, 3, 20),
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
      date: new Date(2021, 4, 8),
    },
    {
      id: "e4",
      title: "Clothes",
      amount: 12000,
      date: new Date(2021, 1, 25),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        // props
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
