/* const pageInformation = {
    title: "Visibility Toggle",
    buttonText: "Show Details"
}

const appRoot = document.getElementById("app");

let showInfo = false;

const toggleInformation = () => {
    showInfo = !showInfo;
    showInfo ? pageInformation.buttonText = "Show Details" : pageInformation.buttonText="Hide Details"
    renderApplication();
};

const renderApplication = () => {
    const template = (
        <div>
            <h1>{pageInformation.title}</h1>
            <button onClick={toggleInformation}>{pageInformation.buttonText}</button>
            {showInfo ? <p>"Here are your options"</p> : null}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApplication(); */

class ToggleInformation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Visibility Toggle",
            showInfo: false
        }
        this.toggleInformation = this.toggleInformation.bind(this);
    };

    toggleInformation() {
        this.setState((prevState) => {
            return {
                showInfo: !prevState.showInfo
            }
        });
    };

    render() {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleInformation}>{this.state.showInfo ? "Hide Details" : "Show Details"}</button>
                {this.state.showInfo ? <p>"Here are your options"</p> : null}
            </div>
        )
    };
}

ReactDOM.render(<ToggleInformation />, document.getElementById("app"));