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

// Nested Element
const root2 = document.querySelector("#root2");

// Cara manual
const li = React.createElement("li", {
  children: "Budi",
});
const li2 = React.createElement("li", {
  children: "Rama",
});
const li3 = React.createElement("li", {
  children: "Yosep",
});
const li4 = React.createElement("li", {
  children: "Bleki",
});

// Parameter 1     = Element
// Parameter 2     = Object (bisa class, children, dll)
// Parameter 3 dst = children
const element2 = React.createElement(
  "ul",
  { className: list },
  React.createElement("li", null, "Budi"),
  React.createElement("li", null, "Rama"),
  React.createElement("li", null, "Yosep"),
  React.createElement("li", null, "Bleki")
);

ReactDOM.render(element2, root2);
