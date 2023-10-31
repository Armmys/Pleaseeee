const sampleSpace = simulateProbP(5)
console.log(`${countEvent(sampleSpace).length} / ${sampleSpace.length}`)

function countEvent(sampleSpace) {
    const resultArray = []
    for (const setNumber of sampleSpace) {
        if (togetherEvent(setNumber,1,2)) resultArray.push(setNumber)
    }
    return resultArray
}

function togetherEvent(setNumber, num1, num2) {
    for (let i = 0; i < setNumber.length; i++) {
        if ((setNumber[i] === num1 || setNumber[i] === num2) && (setNumber[i+1] === num1 || setNumber[i+1] === num2)) return true
    }
    return false
}

function simulateProbP(numberOfSimulate) {
    const arrayOfSetNumber = []
    let countOfArray = 0
    let size = calculateSizeProbP(numberOfSimulate)
    while (countOfArray < size) {
        let setOfRandomNumber = []
        do {
            setOfRandomNumber = randomNotRepeat(1, numberOfSimulate)
        } while (arrayContainInArrayPosition(setOfRandomNumber, arrayOfSetNumber))
        arrayOfSetNumber.push(setOfRandomNumber)
        countOfArray++
    }
    return arrayOfSetNumber
}

function calculateSizeProbP(numberOfSimulate) {
    let size = 1
    for (let i = 1; i <= numberOfSimulate; i++) size *= i
    return size
}

function randomNotRepeat(min, max) {
    const setOfRandomNumber = []
    for (let i = 0; i < max - min + 1; i++) {
        let randomNumber
        do {
            randomNumber = Math.round(Math.random() * (max - min) + min)
        } while (numberContainInArray(setOfRandomNumber, randomNumber))
        setOfRandomNumber.push(randomNumber)
    }
    return setOfRandomNumber
}

function numberContainInArray(array, number) {
    for (const num of array) {
        if (num === number) return true
    }
    return false
}

function arrayContainInArrayPosition(array1, array2) {
    for (const array of array2) {
        if (isArrayEqualPosition(array, array1)) return true
    }
    return false
}

function isArrayEqualPosition(array1, array2) {
    let equalNumber = 0
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            equalNumber++
        }
    }
    return equalNumber === array1.length ? true : false
}