console.log("Hello")

/* Here we're declaring a as a number which type can't be changed */
const a: number = 5
// a = "5" ❌


/* Array..... */
const b: number[] = [1, 2, 3]
console.log(b)
// b.push("4") ❌


/* Tuple..... */
const c: [number, string] = [1, "Hello"]
console.log(c)
// c[0] = "1" ❌
// c[1] = 2 ❌


/* Function which don't have any return type: void */
function greet(name: string): void{
  console.log("Hello " + name)
}
greet("Swabhiman")

/* Function which return a number */
function add(a: number, b: number): number{
  return a + b
}
const result = add(5, 10)
console.log(result)

// function infinity(name: string): never {
//   throw new Error ("Sth went wrong!" + name)
// }
// infinity("Swabhiman")



type USER = {
  name: string,
  age: number,
  isMale: boolean
}
const user: USER = {
  name: "Swabhiman",
  age: 25,
  isMale: true
}
function greetings(data: USER): void{
  console.log("Hello " + data.name + ", you are " + data.age + " years old and you are " + (data.isMale ? "male" : "female"))

}
greetings(user)


/**
 * any, unknown
 */

/* In any data type we can assign any value */
let x: any  
x = "Hello" 
console.log(x.toUpperCase())  // x = 5 ❌

/* In unknown type we've to give a condition to check the type */
let y: unknown  
y = 123
if (typeof y === "string"){
  console.log(y.toUpperCase())
}