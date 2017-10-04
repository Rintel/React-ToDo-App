const pageInformation = {
  title: "Memorize Me",
  subtitle: "A React App for keeping Notes",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    pageInformation.options.push(option);
    e.target.elements.option.value = "";
    renderApplication();
  }
};

const removeAllEntries = () => {
  pageInformation.options = [];
  renderApplication();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * pageInformation.options.length);
  const option = pageInformation.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderApplication = () => {
  const template = (
    <div>
      <h1>{pageInformation.title}</h1>
      {pageInformation.subtitle && <p>{pageInformation.subtitle}</p>}
      {(pageInformation.options.length > 0) ? "Here are your options" : "No options available!"}
      <button disabled={pageInformation.options.length == 0} onClick={onMakeDecision}>What shall I do?</button>
      <button onClick={removeAllEntries}>Delete Entries</button>
      <ol>
        {
          pageInformation.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApplication();



const pageInformation = {
  title: "Memorize Me",
  subtitle: "A React App for keeping Notes",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    pageInformation.options.push(option);
    e.target.elements.option.value = "";
    renderApplication();
  }
};

const removeAllEntries = () => {
  pageInformation.options = [];
  renderApplication();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * pageInformation.options.length);
  const option = pageInformation.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderApplication = () => {
  const template = (
    <div>
      <h1>{pageInformation.title}</h1>
      {pageInformation.subtitle && <p>{pageInformation.subtitle}</p>}
      {(pageInformation.options.length > 0) ? "Here are your options" : "No options available!"}
      <button disabled={pageInformation.options.length == 0} onClick={onMakeDecision}>What shall I do?</button>
      <button onClick={removeAllEntries}>Delete Entries</button>
      <ol>
        {
          pageInformation.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApplication();



