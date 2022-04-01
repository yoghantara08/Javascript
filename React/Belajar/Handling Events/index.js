function Component() {
  const rubahHeading = () => {
    document.getElementsByTagName("h1")[0].textContent = "Selamat Malam";
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={rubahHeading}>Click me</button>
      <p></p>
      <Form />
      <Toggle />
      <LoggingButton />
    </div>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

// Toggle
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

// Isi didalam 'this'
class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return <button onClick={() => this.handleClick()}> Click me</button>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);
