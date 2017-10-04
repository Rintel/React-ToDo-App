class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision",
      subtitle: "We will just tell you what you should do!",
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this); 
    this.handleClick = this.handleClick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions () {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handleClick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption(option) {
    if(!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  };

  render() {
    return (
      <div>
        <Header 
          title={this.state.title} 
          subtitle={this.state.subtitle}
          />
        <User 
          age={27}
          name={"Cedric"}  
        />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handleClick={this.handleClick}
          />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}  
        />
        <AddOptions 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  };
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  ); 
};

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handleClick}
        disabled={!props.hasOptions}
      >
        What shall I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => {
          return <Option key={option} value={option} />
        })
      }
    </div>
  );
};


const Option = (props) => {
  return ( 
    <p key={props.option}>{props.value}</p>
  );
};

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error: error
      };
    });
    e.target.elements.option.value = "";
  };
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("app"));