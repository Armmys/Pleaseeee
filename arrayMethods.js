const array = [3, 7, 1, 9, 2, 5, 8, 4, 6]

// 1.forEach()
console.log("============= forEach =============") // not change original array
array.forEach(number => console.log(number))

// 2.every()
console.log("============= every =============") // not change original array
const every1 = array.every(number => number > 0) // return true or false
console.log(every1)
const every2 = array.every(number => number < 5)
console.log(every2)

// 3.some()
console.log("============= some =============") // not change original array
const some1 = array.some(number => number > 0) // return true or false
console.log(some1)
const some2 = array.some(number => number < 5)
console.log(some2)

// 4.find() & findIndex()
console.log("============= find & findIndex =============") // not change original array
const findElement = array.find(number => number > 5) // find a first element that match a condition
console.log(findElement) // return element
const findIndex = array.findIndex(number => number > 5)
console.log(findIndex) // return index of element

// 5.filter()
console.log("============= filter =============") // not change original array
const filter = array.filter(number => number > 5)
console.log(filter)

// 6.map()
console.log("============= map =============") // not change original array
const map = array.map(number => number + 1)
console.log(map)

// 7.sort()
console.log("============= sort =============") // change original array
array.sort((num1, num2) => num1 - num2 ) // return an array after sort
console.log(array)
array.sort((num1, num2) => num2 - num1 )
console.log(array)

// 8.reduce()
console.log("============= reduce =============") // not change original array
const reduce = array.reduce((total, number) => total + number, 0)
const reduce1 = [..."uck You"].reduce((word, letter) => word + letter, 'F')
console.log(reduce)
console.log(reduce1)

// 9.splice()
console.log("============= splice =============")
// splice(startIndex, add(0) delete(deleteLength), add(newElement))
array.splice(0, 0, 3, 4, 5) // add new element from start index
console.log(array) // return result after adding
const splice1 = array.splice(0, 3) // remove element from start index by deleteLength
console.log(splice1) // return element that been remove from array
console.log(array)
const splice2 = array.splice(0, 1, 10) // replace element with new element
console.log(splice2) // return element that been replace in array
console.log(array) // change original array

// 10.slice() & fill()
console.log("============= slice & fill =============")
// slice(lengthDelete)
const slice1 = array.slice(2) // get element out from index 0 by lengthDelete
console.log(slice1) // return array of element without element that we get out
// slice(start index delete element, end index delete element)
const slice2 = array.slice(2,9) // get element from start index to end index - 1
console.log(slice2) // return array of element that we get
console.log(array) // not change the original array
// fill(new element)
const fill1 = array.fill(1) // replace every element with new element
console.log(fill1) // return array after replace
// fill(new element, start index, end index)
const fill2 = array.fill(2, 1, 5) // replace element in range with new element
console.log(fill2) // return array after replace
console.log(array) // change original array

// 11.push() & pop()
console.log("============= push & pop =============") // change original array
const push = array.push(11) // add element at the last index of array
console.log(push) // new array length
console.log(array) 
const pop = array.pop() // remove the last element of array (Index)
console.log(pop) // remove element
console.log(array)

// 12.shift() & unshift()
console.log("============= shift & unshift =============") // change original array
const shift = array.shift() // remove the first element of array (Index)
console.log(shift) // remove element
console.log(array)
const unshift = array.unshift(9) // add element at the first index of array
console.log(unshift) // new array length
console.log(array)

// 13.includes() & join()
console.log("============= includes & join =============")
// includes(checkElement)
const includes1 = array.includes(9) // check that array contain checkElement
console.log(includes1) // return true
// includes(checkElement, start index)
const includes2 = array.includes(9,3) // check that array contain element in () start form index in ()
console.log(includes2) // return false
// join()
const join1 = array.join() // join element with ,
console.log(join1) // return result string
// join(seperator)
const join2 = array.join(" ♥ ") // join element with seperator
console.log(join2) // return result string
console.log(array) // not change original array