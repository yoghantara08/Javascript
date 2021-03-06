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

// 3. The select Tag
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor: <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="coconut">Coconut</option>
              <option value="strawberry">Strawberry</option>
              <option value="chocolate">Chocolate</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// 4. The file input Tag
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    alert(`Selected file : ${this.fileInput.current.files[0].name}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file: <br />
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// 5. Handling Multiple Inputs
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      numberOfGuests: 0,
      inputText: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        {/* Checkbox */}
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        {/* Number */}
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        {/* Text */}
        <label>
          text:
          <input
            name="inputText"
            type="text"
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

// 6. Uncontrolled Components
class FormName extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
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
      <hr />
      <h4>The select Tag:</h4>
      <FlavorForm />
      <hr />
      <h4>The file input Tag:</h4>
      <FileInput />
      <hr />
      <h4>Handling Multiple Inputs:</h4>
      <Reservation />
      <hr />
      <h4>Uncontrolled Components:</h4>
      <FormName />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
