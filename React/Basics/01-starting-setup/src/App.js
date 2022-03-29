import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
