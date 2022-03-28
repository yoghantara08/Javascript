import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 3, 20);
  const expenseTitle = "Beli Makan";
  const expenseAmount = 12_000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toUTCString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rp {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
