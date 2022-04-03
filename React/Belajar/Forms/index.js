// Forms
function plainHTMLForms() {
  return `<form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>`;
}

// 1. Controlled Components
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name :<br />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// 2. The textarea Tag
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello there, this is some text in a text area" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay: <br />
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Forms</h1>
      <h4>Controlled Components:</h4>
      <NameForm />
      <hr />
      <h4>The textarea Tag:</h4>
      <EssayForm />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
