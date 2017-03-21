// ask for age
// if age enter is not Number
// fail if not right type and make them enter again
// once right type is entered
// check to see if age is above 15
// if above then alert/console message
// else console another message

for (i = 3; i > 0; i--) {

    var age = prompt("What is your age?");
    if (parseInt(age)) {
        break;
    } else {
        console.log("That is so not right. You have " + i + " more tries left.");
    }
}

if (age > 15) {
    console.log("You are " + age + " years old");
} else if (age < 15) {
    console.log("You are very young!");
} else {
    console.log("I don't understand you!");
}
