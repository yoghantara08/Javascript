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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
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

class Calculator2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFafrenheitChange = this.handleFafrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelciusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFafrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <fieldset>
          <legend>Converter:</legend>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelciusChange}
          />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFafrenheitChange}
          />
          <BoilingVerdict celcius={parseFloat(celsius)} />
        </fieldset>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Lifting State Up</h1>
      <Calculator />
      <Calculator2 />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
