"use strict";
console.log("Hello");
/* Here we're declaring a as a number which type can't be changed */
const a = 5;
// a = "5" ❌
/* Array..... */
const b = [1, 2, 3];
console.log(b);
// b.push("4") ❌
/* Tuple..... */
const c = [1, "Hello"];
console.log(c);
// c[0] = "1" ❌
// c[1] = 2 ❌
/* Function which don't have any return type: void */
function greet(name) {
    console.log("Hello " + name);
}
greet("Swabhiman");
/* Function which return a number */
function add(a, b) {
    return a + b;
}
const result = add(5, 10);
console.log(result);
const user = {
    name: "Swabhiman",
    age: 25,
    isMale: true
};
function greetings(data) {
    console.log("Hello " + data.name + ", you are " + data.age + " years old and you are " + (data.isMale ? "male" : "female"));
}
greetings(user);
/**
 * any, unknown
 */
let x;
x = "Hello";
console.log(x.toUpperCase());
