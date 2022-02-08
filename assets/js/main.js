console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(1 + 7 + 3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));

//Boolean() is an opbject wrapper for a boolean value.
// the first parameter will be transformed into a boolean value if necessary
// 0, -0, null, false, NaN, undefined and " " have the initial value false.
// Don't mistake the true and false of the Boolean-Object with the primitive Boolean values true and false


//this if-construct is considered true
var x = new Boolean("false");
if (x) {
    // this code is executed
    console.log(x);
    //console: Boolean{true}
}

//doesn't work with primitive boolean!
x = false;
if (x) {
    // this code is not executed
    console.log(x);
    //no console log
}