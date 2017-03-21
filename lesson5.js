var text = 'outside';

function logIt() {
    console.log(text);
    var text = 'inside';
}
logIt();

// variables are placed at top
// followed by functions
// this happens to each elements scope

var arr = ['age', 22, 44, 'hello', 'hi', 332, 45];

// print out values only if they are of type number
for (var i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) == 'number') {
        console.log(arr[i]);
    }
}

// flash problem. Create a function to add key value to an object.
function addToObj(obj, key, val) {
    obj[key] = val;
}
addToObj(obj, "test", "valuable");
console.log(obj);

// Or
obj.test = "valuable";

// indexOf and lastIndexOf
// find out if an array contains two of the same number/letter
// slice - first arg is point of start, second arg is last point in array

var info = ['a', 'b', 'c', 'd', 'b', 'e'];

for (var i = 0; i < info.length; i++) {
    if (info.indexOf(info[i]) !== info.lastIndexOf(info[i])) {
        console.log("Duplicate values found! " + info[i]);
    }
}

// side problem, finding non duplicate array
var info = ['a', 'b', 'c', 'd', 'b', 'e'];
var out = [];
var obj = {};

console.log(info);

for (var i = 0; i < info.length; i++) {
    obj[info[i]] = 0;
}
for (var key in obj) {
    out.push(key);
}
console.log(out);
