const root = document.querySelector("#root");

// membuat element
const element = React.createElement("h1", {
  children: "UI yang dibuat dari React JS",
  className: "heading-1",
});

// merender element
ReactDOM.render(element, root);
