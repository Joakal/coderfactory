// Define a
// function max() that takes two numbers as arguments and returns the largest of them.Use the
// if -then -
//     else construct available in Javascript.

function max(arg1, arg2) {
    if (arg1 > arg2) {
        return arg1;
    } else {
        return arg2;
    }
}

console.log(max(5, 10));

// Define a
// function maxOfThree() that takes three numbers as arguments and returns the largest of them.
//

function maxOfThree(arg1, arg2, arg3) {
    if (arg1 > arg2 && arg1 > arg3) {
        return arg1;
    } else if (arg2 > arg1 && arg2 > arg3) {
        return arg2;
    } else if (arg3 > arg1 && arg3 > arg2) {
        return arg3;
    }
}

console.log(maxOfThree(5, 10, 15));

// Lecturer:
function lecMaxOfThree(arg1, arg2, arg3) {
    var arr = [arg1, arg2, arg3].sort(function(a, b) {
        return a > b;
    });
    return arr.pop();
}
console.log(lecMaxOfThree(5, 10, 15));

// Write a
// function that takes a character(i.e.a string of length 1) and returns true
// if it is a vowel, false otherwise.
//
function determineVowel(arg1) {

    var vowels = ['a', 'i', 'e', 'o', 'u'];

    for (var i = 0; i < vowels.length; i++) {
        if (arg1 == vowels[i]) {
            return true;
        }
    }
    return false;
}

//Lecturer
function isVowel(input) {
    var lowerCase = input.toLowerCase();

    var vowel = ['a', 'e', 'i', 'o', 'u'];

    return vowel.indexOf(lowerCase > -1);
}

console.log(determineVowel('a'));
console.log(determineVowel('b'));

// Write a
// function translate() that will translate a text into "rövarspråket".That is, double every consonant and place an occurrence of "o" in between.For example, translate("this is fun") should
// return the string "tothohisos isos fofunon".

function translate(arg1) {
    var result = "";
    for (var i = 0; i < arg1.length; i++) {
        if (!determineVowel(arg1[i]) && arg1[i] != " ") {
            result = result + arg1[i] + "o" + arg1[i];
        } else {
            result = result + arg1[i];
        }
    }
    return result;
}
console.log(translate("rövarspråket"));
console.log(translate("this is fun"));

//
// Define a
// function sum() and a
// function multiply() that sums and multiplies(respectively) all the numbers in an array of numbers.For example, sum([1, 2, 3, 4]) should
// return 10, and multiply([1, 2, 3, 4]) should
// return 24.
function sum(arr1) {
    var result = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (i === 0) {
            result = arr1[0];
        } else {
            result = result + arr1[i];
        }
    }
    return result;
}
console.log(sum([1, 2, 3, 4]));

function multiply(arr1) {
    var result = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (i === 0) {
            result = arr1[0];
        } else {
            result = result * arr1[i];
        }
    }
    return result;
}
console.log(multiply([1, 2, 3, 4]));

//
// Define a
// function reverse() that computes the reversal of a string.For example, reverse("jag testar") should
// return the string "ratset gaj".
function reverseStr(arg1) {
    var result = "";
    for (var i = arg1.length - 1; i > 0; i--) {
        result = result + arg1[i];
    }
    return result;
}
console.log(reverseStr("jag testar"));

//
// Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
function EnglishToSwedish(arg1) {
    var result = "";

    var EngToSwe = {
        "merry": "god",
        "christmas": "jul",
        "and": "och",
        "happy": "gott",
        "new": "nytt",
        "year": "år"
    };

    var wordList = arg1.split(" ");

    wordList.forEach(function(elem) {
        if (EngToSwe[elem]) {
            result = result + " " + EngToSwe[elem];
        } else {
            result = result + " " + elem;
        }

    });

    return result;
}

console.log(EnglishToSwedish("merry christmas and a happy new year to everyone"));

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(arr1) {
    var result = "";
    arr1.forEach(function(elem) {
        if (elem.length > result.length) {
            result = elem;
        }
    });
    return result;
}

var merryChristmasArr = ["merry", "christmas", "everyone"];
console.log(findLongestWord(merryChristmasArr));

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(arr1, i) {
    var result = [];
    arr1.forEach(function(elem) {

        if (elem.length > i) {
            result.push(elem);
        }
    });
    return result;
}

// Lecturer
function lecFilterLongWords(arr1, i) {
    var result = arr1.filter(function(elem) {
        return word.length > i;
    });
    return result;
}
console.log(filterLongWords(merryChristmasArr, 7));

// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq(arg1) {
    var result = {};

    var obj = arg1.split("");
    obj.forEach(function(elem) {
        if (!result[elem]) {
            result[elem] = 1;
        } else {
            result[elem]++;
        }
    });

    return result;
}

console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
