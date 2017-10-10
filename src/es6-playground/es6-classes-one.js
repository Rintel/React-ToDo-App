
class Person {
    constructor (name = "Cedric", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        //return "Hi " + this.name + "!";
        return `Hi. I'm ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = "") {
        super();
        this.major = major;
		}
		hasMajor() {
			return !!this.major;
		}
		getDescription() {
			let description = super.getDescription();

			if (this.hasMajor()) {
				description += ` Their major ist ${this.major}`;
			}

			return description;
		}
}

class Traveler extends Person {
	constructor(name, age, location = "") {
		super();
		this.location = location;
	}
	hasLocation() {
		return !!this.location;
	}
	getGretting() {
		let gretting = super.getGretting();

		if (this.hasLocation()) {
			gretting += `I'm visiting from ${this.location}`;
		}

		return gretting;
	}
}



const me = new Traveler("Cedric Laier", 27, "");
console.log(me.getGretting());

const other = new Student();
console.log(other.getDescription());