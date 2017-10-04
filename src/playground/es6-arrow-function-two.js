//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

/* const addArrow = (a, b) => {
    console.log(arguments); //not available anymore!
    return a + b;
}
 */
console.log(add(55,1));
//console.log(addArrow(55, 1));

// this keyword - no longer bound

const user = {
    name: "Cedric",
    cities: ["Berlin", "Paris", "London"],
    printPlacesLived() {
        this.cities.map((city) => this.name + " has lived in " + city + "!");
    }
};

console.log(user.printPlacesLived());

// Challenge Area



const multiplier = {
    numbers: [1, 3, 5, 7],
    multiplyby: 3,
    multiplyNumbers() {
        return this.numbers.map((number) => this.multiplyby * number);
    }
};

console.log(multiplier.multiplyNumbers());
