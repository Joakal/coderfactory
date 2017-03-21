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
