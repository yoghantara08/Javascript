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

// Adding a Second Input
const scaleNames = {
  c: "Celcius",
  f: "Fafrenheit",
};

class TemperatureInput extends React.Component {
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
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

// Writing Conversion Functions
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function App() {
  return (
    <div>
      <h1>Lifting State Up</h1>
      <Calculator />
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
