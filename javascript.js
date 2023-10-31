function doSomething(msg) {
    if (msg === null || msg === undefined) return `hello, guest`
    else return `hello, ${msg}`
}

function doSomethingAgain(msg) {
    console.log((msg === null || msg === undefined) ? `hello, guest` : `hello, ${msg}`)
}

function dividedByTwo() {
    num = num / 2
}

console.log('------------- function ---------------')
console.log(doSomething('KUN'))
doSomethingAgain('KUN')

let num = 10
console.log(`Before use function num is ${num}`)
dividedByTwo()
console.log(`After use function num is ${num}`)

// optional chaining
console.log('------------- optional chaining ---------------')
let array
console.log(array?.length)

// nullish
console.log('------------- nullish ---------------')
let a
let b = [2,4,6,8]
a = a ?? b // (a !== null && a !== undefined) ? a : b
console.log(a) // [2,4,6,8]

// string compared (case sensitive)
console.log('------------- string compared ---------------')
console.log('a' === 'A') // false
console.log('a' === 'a') // true
console.log('a' > 'A') // true
console.log('a' < 'A') // false

// object compared (address)
console.log('------------- object compared ---------------')
let objectA = [1,2,3,4,5,6]
let objectB = objectA
let objectC = [1,2,3,4,5,6]
console.log(objectA === objectC) // false
console.log(objectA === objectB) // true

// primitive and object
console.log('------------- primitive and object ---------------')
let primitive1 = true
let primitive2 = primitive1
let object1 = [1, 200, 300]
let object2 = object1
console.log(primitive1) // true
console.log(object1) // [1, 200, 300]
primitive2 = false
object2[0] = 100
console.log(primitive1) // true
console.log(primitive2) // false
console.log(object1) // [100, 200, 300]
console.log(object2) // [100, 200, 300]

// loop
console.log('------------- loop ---------------')
let sum = [10, 20, 30]
for (const prop of sum) {
    console.log(prop)
}

// spread
let msg = 'Kuy Promt'
console.log(msg.toUpperCase())
let arrayOfMSG = [...msg]
console.log(arrayOfMSG)

// higher order function
function lowerFunc(num) {
    return num + 1
}

function higherFunc(num, func) { // 2. function can be used by another function parameter
    return func(num) // This line return the result of function not function
}

function higherFunc2(num) {
    const func = lowerFunc // 1. function can stored in variable
    console.log(func(num))
    return func // 3. function can be return by other function
}

let num1 = 10
console.log(lowerFunc(num1))
console.log(higherFunc(num1, lowerFunc))
console.log(higherFunc2(num1))

let arrayK = Array.of(1,2,3)
let arrayJ = Array.from(arrayK)
console.log(arrayK)
console.log(arrayJ)
arrayJ[0] = 100
console.log(arrayK === arrayJ)
console.log(arrayK)
console.log(arrayJ)

arrayK[arrayK.length] = 4
arrayJ.push(4)
console.log(arrayK)
console.log(arrayJ)
