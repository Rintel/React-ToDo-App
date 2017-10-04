var nameVar = "Cedric";
nameVar = "Mike";
console.log("nameVar", nameVar)

let nameLet = "Cedric";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping 

var fullName = "Cedric Laier";


if (fullName) {
    var firstName = fullName.split(" ")[0];
    console.log(firstName);
}