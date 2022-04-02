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

const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <div>
      <h1>Lists and Keys</h1>
      <h4>Rendering Multiple Components:</h4>
      <NumberList numbers={numbers} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
