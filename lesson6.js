// Reverse a string function

function reverse(key1) {

    var temp = "";

    // The typical incremental loop
    // for (var i = 0; i < key1.length; i++) {
    //     temp = temp + key1.slice(key1.length - i - 1, key1.length - i);
    // }

    // The count down loop!
    for (var i = key1.length; i > 0; i--) {
        temp = temp + key1[i - 1];
        console.log("Var i: " + i + " var temp: " + temp);
    }
    console.log(temp);
}

var data = reverse("apples");

// Write a JavaScript program to find the most frequent item of an array.
// Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function common(arrInput) {

    // Sort the array
    var sortedArr = arrInput.sort();

    // Set initial values
    var commonItem = arrInput[0];
    var occurence = 0;
    var counter = 0;
    var previousItem = arrInput[0];

    for (var i = 0; i < arrInput.length; i++) {

        // It doesn't match the previous item? Then reset counter
        if (arrInput[i] !== previousItem) {
            previousItem = arrInput[i];
            counter = 1;
        } else {
            counter++;
            // If the current item appears often then it's our new common item
            if (counter > occurence) {
                commonItem = arrInput[i];
                occurence = counter;
            }
        }
    }

    console.log(commonItem + " ( " + occurence + " times )");
}

common(arr1);

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
function last(arrInput, pos = 1) {
    if (pos < arrInput.length) {
        return arrInput.slice(arrInput.length - pos, arrInput.length);
    } else {
        return arrInput.slice(0, arrInput.length);
    }
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
