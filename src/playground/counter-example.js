/* let count = 0;

const addOne = () => {
  count ++;
  renderCounterApp();
};

const removeOne = () => {
  count--;
  renderCounterApp();
};

const clear = () => {
 count = 0;
 renderCounterApp();
}



const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>
        +1
    </button>
      <button onClick={removeOne}>
        -1
    </button>
      <button onClick={clear}>
        Clear
    </button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp(); */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0 
    };
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  componentDidMount() {
    const stringNumber = localStorage.getItem("count");
    const number = parseInt(stringNumber, 10);
    if (!isNaN(number)) {
      this.setState(() => ({ count: number }))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  removeOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  };

  resetCounter() {
    // THIS IS A BETTER WAY OF SETTING THE STATE BECAUSE SETSTATE() IS AN ANSYNCHRONYOUS FUNCTION
    this.setState(() => {
      return {
        count: 0
      };
    });
/*  this.setState({count: 0});
    this.setState({
      count: this.state.count + 1
    }); */
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.removeOne}>-1</button>
        <button onClick={this.resetCounter}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById("app"));