// If Statement
function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Element Variables
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

// Inline If with Logical && Operator
const messages = ["Halo", "Ada Pesan", "Yang", "Belum", "dibaca"];
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

// Inline If-Else with Conditional Operator
function Ternary() {
  const isLoggedIn = true;
  return (
    <div>
      The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.{" "}
    </div>
  );
}

// Preventing Component from Rendering
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({ showWarning: !state.showWarning }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h4>If Statement:</h4>
      <Greeting isLoggedIn={true} />
      <hr />
      <h4>Element Variables:</h4>
      <LoginControl />
      <hr />
      <h4>Inline If with Logical && Operator:</h4>
      <Mailbox unreadMessages={messages} />
      <hr />
      <h4>Inline If-Else with Conditional Operator:</h4>
      <Ternary />
      <hr />
      <h4>Preventing Component from Rendering:</h4>
      <Page />
    </div>
  );
}

// Try changing to isLoggedIn={true}:
// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
