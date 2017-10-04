"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyApp = function (_React$Component) {
  _inherits(MyApp, _React$Component);

  function MyApp(props) {
    _classCallCheck(this, MyApp);

    var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));

    _this.state = {
      title: "Indecision",
      subtitle: "We will just tell you what you should do!",
      options: []
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    return _this;
  }

  _createClass(MyApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, {
          title: this.state.title,
          subtitle: this.state.subtitle
        }),
        React.createElement(User, {
          age: 27,
          name: "Cedric"
        }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handleClick: this.handleClick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOptions, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return MyApp;
}(React.Component);

;

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.handleClick,
        disabled: !props.hasOptions
      },
      "What shall I do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, value: option });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "p",
    { key: props.option },
    props.value
  );
};

var AddOptions = function (_React$Component2) {
  _inherits(AddOptions, _React$Component2);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this2.state = {
      error: undefined
    };
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
    return _this2;
  }

  _createClass(AddOptions, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      e.target.elements.option.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.onFormSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

var User = function User(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Name: ",
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Age: ",
      props.age
    )
  );
};

ReactDOM.render(React.createElement(MyApp, null), document.getElementById("app"));
