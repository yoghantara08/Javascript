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

// 2. Specialization
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog2() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(event) {
    this.setState({ login: event.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}`);
  }

  render() {
    return (
      <Dialog title="Avenger Movie" message="Peter Parker become superman">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Composition vs Inheritance</h1>
      <WelcomeDialog />
      <SplitPane left={<Contacts />} right={<Chat />} />
      <WelcomeDialog2 />
      <SignUpDialog />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
