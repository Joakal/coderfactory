// Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// The below done by Vaibhav in class.
function last(arg1, arg2) {
    if (arg2 === undefined) {
        return arg1[arg1.length - 1];
    } else {
        return arg1.slice[arg1.length - arg2];
    }
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));


// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

function dashing(num) {
    var result = "";
    var sNum = num.toString();
    for (var i = 0; i < sNum.length; i++) {
        if (parseInt(sNum[i]) % 2 === 0 &&
            parseInt(sNum[i + 1]) % 2 === 0) {
            result = result + sNum[i] + "-";

        } else {
            result = result + sNum[i];
        }
    }

    console.log(result);
}

dashing("025468");

// There are two arrays with individual values,
//write a JavaScript program to compute the sum of each individual index value from the given array
// Sample array : array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output : [4, 5, 8, 10, 12, 13]

var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];

function combineArray(arg1, arg2) {
    var result = [];
    var largestLength = arr1.length > arr2.length ? arr.length : arr2.length;
    for (var i = 0; i < largestLength; i++) {
        result[i] = (arg1[i] || 0) + (arg2[i] || 0);
    }

    console.log(result);
}

combineArray(array1, array2);

// Write a JavaScript program to find duplicate values in a JavaScript array.
function findDupe(arg1) {
    var result = [];
    for (var i = 0; i < arg1.length; i++) {
        if (arg1.indexOf(arg1[i]) !== arg1.lastIndexOf(arg1[i]))
            result.push(arg1[i]);
    }

    console.log(result);
}

findDupe([1, 2, 3, 4, 4, 6, 6, 7, 8, 9]);



// Can perform loops over array elements
var arr1 = [2, 4, 5, 6];

function print(arg) {
    console.log(arg);
}

arr1.forEach(print);

function double(arg) {
    return arg * 2;
}

var result = array.map(double);

function onlyEven(arg) {
    return arg % 2 === 0;
}

var filtered = array.filter(onlyEven);

function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

var filtered = each(array, print);

function doublefunc(arg) {
    return arg * 2;
}

var double = map([1, 2, 3, 4], doublefunc);
