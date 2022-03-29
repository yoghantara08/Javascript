import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState mereturn array
  // yg pertama valuenya sendiri, yg kedua update yg kita inginkan
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Title Updated");
    console.log(title); // masih mengambil data lama dan belum terupdate
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rp {props.amount}</div>
      </div>
      {/* function jangan diisi () agar tidak langsung di eksekusi */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
