function returnLongestWord(firstWord, secondWord) {
    if (firstWord.length > secondWord.length) {
        return firstWord;
    } else {
        return secondWord;
    }
}

var result = returnLongestWord('apples', 'bob');

console.log(result);

// do the infamous fizzbuzz
for (var i = 1; i <= 1; i++) {

    if (i % 15 === 0) {
        console.log('fizzbuzz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else {
        console.log(i);
    }
}
