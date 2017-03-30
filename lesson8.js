// Lecturer

// What forEach does:
[1, 2, 3, 4, 5].forEach(function(elem) {
    console.log('Printing:', elem);
});

// create function
// takes in array and function
// invokes function with each element in the array

function loopAndApply(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

function print(e) {
    console.log(e);
}

loopAndApply([1, 2, 3, 4, 5], print);

function name(firstName) {
    var intro = 'Hi My name is ';

    function lastName(theLastName) {
        return intro + firstName + ' ' + theLastName;
    }
    return lastName;
}
var lastNameFunction = name('V');
console.log(firstName);
var fullName = lastNameFunction('Namburi');
