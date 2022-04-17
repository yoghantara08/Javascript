import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // props.children
  // berfungsi untuk memparsing data JSX yang mengimport component ini
  // atau bisa disebut component ini berguna sebagai Wrapper
  // agar kita tidak mengulan CSS yang sama berulang-ulang
  return <div className={classes}>{props.children}</div>;
};

export default Card;
