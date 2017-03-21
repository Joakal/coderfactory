var age = prompt('What is your age?');

var isNumber = (parseInt(age));

console.log(isNumber);

if (!parseInt(age)) {
    console.log("This is an invalid number");
} else {
    if (age > 18) {
        console.log("Legal");
    } else {
        console.log("Go back home");
    }
}


var dayAcronym = prompt('Enter shorthand');

switch (dayAcronym) {

case 'mon':
    console.log('It is Monday');
    break;
case 'tue':
    console.log('It is Tuesday');
    break;
default:
    console.log('Invalid shorthand, please try again');
}
