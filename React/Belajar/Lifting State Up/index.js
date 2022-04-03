function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ temperature: event.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celcius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Lifting State Up</h1>
      <Calculator />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
