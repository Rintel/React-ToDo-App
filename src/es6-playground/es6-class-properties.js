// -----------
// Example of the old class syntax

class OldSyntax {
  constructor() {
    this.name = "Cedric";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi, my name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// --------------
// Example of the new es6 class syntax

class NewSyntax {
  name = "Jen";
  getGreeting = () => {
    return `Hi, my name is ${this.name}.`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());