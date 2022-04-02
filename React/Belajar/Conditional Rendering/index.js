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

function App() {
  return (
    <div>
      <h4>If Statement:</h4>
      <Greeting isLoggedIn={true} />
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
