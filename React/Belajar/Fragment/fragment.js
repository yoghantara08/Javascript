const root = document.querySelector("#root");

const p1 = React.createElement("p", {
  children: "Ini adalah paragraph 1",
});
const p2 = React.createElement("p", {
  children: "Ini adalah paragraph 2",
});

// Fragment (elemen kosong)
const element = React.createElement(React.Fragment, {
  children: [p1, p2],
});

ReactDOM.render(element, root);
