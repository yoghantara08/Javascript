// Transform lists in JavaScript
function listsTransformJS() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);
}
listsTransformJS();

// In React, transforming arrays into lists of elements is nearly identical.

// 1. Rendering Multiple Components
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

// 2. Extracting Components with Keys
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList2(props) {
  const numbers = props.numbers2;
  const listItems = numbers.map((number2) => (
    <ListItem key={number2.toString} value={number2} />
  ));

  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [40, 20, 50, 80, 70];
function App() {
  return (
    <div>
      <h1>Lists and Keys</h1>
      <h4>Rendering Multiple Components:</h4>
      <NumberList numbers={numbers} />
      <hr />
      <h4>Extracting Components with Keys:</h4>
      <NumberList2 numbers2={numbers2} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
