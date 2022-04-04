// 1. Containment
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft</p>
    </FancyBorder>
  );
}

// Multiple Children
function Contacts() {
  return <h2>This is contacts panel</h2>;
}
function Chat() {
  return <h2>This is chat panel</h2>;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Composition vs Inheritance</h1>
      <WelcomeDialog />
      <SplitPane left={<Contacts />} right={<Chat />} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
