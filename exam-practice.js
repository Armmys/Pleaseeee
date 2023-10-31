const prompt = require('prompt-sync')();

let number = -2
let bigInt = 2000000000000000000000000000000000000n
let string = 'B'
let boolean = true
let symbol = Symbol("foo")
let func = function(msg) { console.log(msg) } 
let array = [1,2,3]
let object = {id: 1, name:'Pen'}

// optional chaining
console.log(object?.id) // if the left expression of '.' is undefined or null. In normal it will return error but if we use optional chaining '?.' it will return undefined.

// nullish
const objectCopy = object ?? "empty object" // if the left variable of ?? is null or undefined it will use the right variable
console.log(objectCopy)

// condition operator
const objectCopyAgain = (object === undefined || object === null) ? "empty object" : object // (condition) ? true : false
console.log(objectCopyAgain)

// typeof
console.log(typeof number) // number
console.log(typeof bigInt) // bigint
console.log(typeof string) // string
console.log(typeof boolean) // boolean
console.log(typeof symbol) // symbol
console.log(typeof func) // function
console.log(typeof array) // object
console.log(typeof object) // object

// Math
console.log(Math.PI) // 3.141592653589793
console.log(Math.floor(2.9)) // 2
console.log(Math.ceil(2.1)) // 3
console.log(Math.round(2.4)) // 2
console.log(Math.round(2.5)) // 3
console.log(Math.round(2.6)) // 3
console.log(Math.pow(2, 5)) // 32

// addressing object
const a = {id: 1, name: 'C'}
const b = a
const c = [1, 2, 3, 4, 5]
const d = c
console.log(a) // { id: 1, name: 'C' }
console.log(c) // [ 1, 2, 3, 4, 5 ]
b.id = 999
d[0] = 999
console.log(a) // { id: 999, name: 'C' }
console.log(c) // [ 999, 2, 3, 4, 5 ]

// switch case (===)
let s = '1'
switch(s) { // This is case 2
    case '1': console.log('This is case 1')
        break
    case '2': console.log('This is case 2')
        break
    case '3': console.log('This is case 3')
        break
    default: console.log('This is default case')
        break
}

// for i - array
for (let i = 0; i < 10; i++) { // i will start with 0 and end with 9
    console.log(i)
}

const car = {id: 1, name: 'Benz'}
const cars = [car, car, car, car]

// for in - array / object
for (const prop in car) { // variable will be a property name of object. 
    console.log(prop) // property name
    console.log(car[prop]) // property value
}
for (const index in cars) { // variable will be a index of array
    console.log(index) // index
    console.log(cars[index]) // value position of index
}

// for of - array / object
for (const [prop, value] of Object.entries(car)) { // variable will be [property, value] of object.
    console.log(prop) // property name
    console.log(value) // property value
}
for (const value of cars) { // variable will be a value of array.
    console.log(value) // value of array
}

// for each - array / object
Object.entries(car).forEach(value => { // variable will be a property: value of object
    console.log(value)
})
cars.forEach((value) => { // variable will be [value, index] of array
    console.log(value)
})
cars.forEach((value, index) => { // variable will be [value, index] of array
    console.log(value)
    console.log(index)
})

// while loop - array / object
let m = ''
while (m !== 'LOL') { // loop until m is equal to 'LOL'
    m = 'LOL'
}

// global scope
let msg1 = 'greeting global' // this variable can be use in any scope
console.log(msg1)

// block scope
{
    let msg2 = 'greeting block' // this variable can be use in only this block scope
    var msgx = 'This is var'
    console.log(msg1)
    console.log(msg2)
}
console.log(msgx)

// function scope
function func1() {
    var msgz = 'This is var in function'
    let msg3 = 'greeting function' // this variable can be use in only this function scope
    console.log(msg1)
    console.log(msg3)
}
func1()

// destructuring
let [ a1, a2, , , a3, , , ...a4 ] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(a1) // 1
console.log(a2) // 2
console.log(a3) // 5
console.log(a4) // [8, 9, 10]

let b10 = [ 3, 4, 5, 6, 7 ]
let [b1, b2, b3, b4, b5, b6, b7, b8, b9] = [ 1, 2, ...b10, 8, 9 ]
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)
console.log(b5)
console.log(b6)
console.log(b7)
console.log(b8)
console.log(b9)




