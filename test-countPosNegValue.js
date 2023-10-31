// Problem#countPosNegValue
function countPosNegValue(posNegIntegerArray) {
    const result = { positive: 0, negative: 0 }
    if (posNegIntegerArray === null || posNegIntegerArray === undefined) return undefined
    if (posNegIntegerArray?.length === 0) return {}
    for (let i = 0; i < posNegIntegerArray?.length; i++) {
        if (posNegIntegerArray[i] > 0) result.positive++
        if (posNegIntegerArray[i] < 0) result.negative++
    }
    return result
}

// Test Section
let posNegIntegerArray
posNegIntegerArray = [999]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [-132]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [-1, -10, -91]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [3, 2432, 10000, 71]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [-201, 0, -1, -888]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [0, 33, 453, 1356245]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [21, 0, -879, 111, 0, -2423]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [-3, 1, 12, 245, 87392, -2, -10230]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [0, 3, 41, 0, -212, 56, -1222, 120, 80, -99, 12, 34, -188, 0, 0]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [0, 0, 0, -3, 1, 12, 0, 245, 87392, 0, -2, -10230, 0, 0]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [0, 0, 0, 0, 0, 0, 0]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = [0]
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = []
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = null
console.log(countPosNegValue(posNegIntegerArray))
posNegIntegerArray = undefined
console.log(countPosNegValue(posNegIntegerArray))