import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>21 Maret 2022</div>
      <div className="expense-item__description">
        <h2>Beli Makan</h2>
        <div className="expense-item__price">Rp12.000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
