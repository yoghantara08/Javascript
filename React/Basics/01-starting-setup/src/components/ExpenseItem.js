import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 3, 20);
  // const expenseTitle = "Beli Makan";
  // const expenseAmount = 12_000;
  return (
    <div className="expense-item">
      <div className="expense-item__date">{props.date.toUTCString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rp {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
