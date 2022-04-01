class Clock extends React.Component {
  constructor(props) {
    super(props);
    // The only place where you can assign this.state is the constructor.
    this.state = { date: new Date() };
  }

  // The componentDidMount() method runs after the component output has been rendered to the DOM.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  // clearing interval / reset
  componentWillUnount() {
    clearInterval(this.timerID);
  }

  // method tick() for the clock component to run every second
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />);

/* https://reactjs.org/docs/state-and-lifecycle.html

Let’s quickly recap what’s going on and the order in which the methods are called:

1. When <Clock /> is passed to root.render(), React calls the constructor 
   of the Clock component. Since Clock needs to display the current time,
   it initializes this.state with an object including the current time. 
   We will later update this state.

2. React then calls the Clock component’s render() method. This is how 
   React learns what should be displayed on the screen. React then updates
   the DOM to match the Clock’s render output.

3. When the Clock output is inserted in the DOM, React calls the 
   componentDidMount() lifecycle method. Inside it, the Clock component 
   asks the browser to set up a timer to call the component’s tick() 
   method once a second.

4. Every second the browser calls the tick() method. Inside it, the Clock
   component schedules a UI update by calling setState() with an object 
   containing the current time. Thanks to the setState() call, React knows
   the state has changed, and calls the render() method again to learn 
   what should be on the screen. This time, this.state.date in the 
   render() method will be different, and so the render output will 
   include the updated time. React updates the DOM accordingly.

5. If the Clock component is ever removed from the DOM, React calls the 
   componentWillUnmount() lifecycle method so the timer is stopped. 

*/
