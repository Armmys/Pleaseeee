const prompt = require('prompt-sync')();

function rollFiveDices() {
    const DiceScore = []
    for (let i = 0; i < 5; i++) DiceScore.push(Math.round((Math.random() * 5) + 1))
    return DiceScore
}

function score(diceScore, catagory) {
    console.log(diceScore)
    let score = 0
    const countDiceScore = {}
    for (const value of diceScore) {
        if (countDiceScore[value] === undefined) countDiceScore[value] = 1
        else countDiceScore[value]++
    }
    switch (catagory) {
        // Yacht
        case 'yacht':
            for (const num in countDiceScore) {
                if (countDiceScore[num] === 5) score = 50
            }
            return score
        // Choice
        case 'choice':
            for (const num in countDiceScore) {
                score += num * countDiceScore[num]
            }
            return score
        // Big Straight
        case 'big straight':
            let checkBS = 0
            let BS = ['2', '3', '4', '5', '6']
            for (const num1 in countDiceScore) {
                for (const num2 in BS) {
                    if (num1 === BS[num2]) {
                        checkBS++
                        BS.slice(num2, 1)
                        break
                    }
                }
            }
            if (checkBS < 5) score = 0
            else score = 30
            return score
        // Little Straight
        case 'little straight':
            let checkLS = 0
            let LS = ['1', '2', '3', '4', '5']
            for (const num1 in countDiceScore) {
                for (const num2 in LS) {
                    if (num1 === LS[num2]) {
                        checkLS++
                        LS.slice(num2, 1)
                        break
                    }
                }
            }
            if (checkLS < 5) score = 0
            else score = 30
            return score
        // Four of a Kind
        case 'four of a kind':
            for (const num in countDiceScore) {
                if (countDiceScore[num] === 4) score = num * 4
            }
            return score
        // Full House
        case 'full house':
            for (const num1 in countDiceScore) {
                if (countDiceScore[num1] === 3) {
                    for (const num2 in countDiceScore) {
                        if (countDiceScore[num2] === 2) score = (countDiceScore[num1] * 3) + (countDiceScore[num2] * 2)
                    }
                }
            }
            return score
        // Sixes
        case 'sixes':
            for (const num in countDiceScore) {
                if (num === '6') {
                    score = num * countDiceScore[num]
                    break
                }
            }
            return score
        // Fives
        case 'fives':
            for (const num in countDiceScore) {
                if (num === '5') {
                    score = num * countDiceScore[num]
                    break
                }
            }
            return score
        // Fours
        case 'fours':
            for (const num in countDiceScore) {
                if (num === '4') {
                    score = num * countDiceScore[num]
                    break
                }
            }
            return score
        // Threes
        case 'threes':
            for (const num in countDiceScore) {
                if (num === '3') {
                    score = num * countDiceScore[num]
                    break
                }
            }
            return score
        // Twos
        case 'twos':
            for (const num in countDiceScore) {
                if (num === '2') {
                    score = num * countDiceScore[num]
                    break
                }
            }
            return score
        // Ones
        case 'ones':
            for (const num in countDiceScore) {
                if (num === '1') {
                    score = num * countDiceScore[num]
                    break
                }
            }
            return score
        // Not choosing
        default: console.log("Please enter category collectly!")
            return score
    }
}

function startGame() {
    let gameStatus = 1
    console.log("This is Yacht Game")
    console.log("Do you want to play?")
    do {
        const startA = prompt("Y/N : ")
        switch (startA) {
            case 'Y':
                let rollDiceResult
                let rollDiceAgain
                do {
                    console.log("Let's roll a dices!")
                    rollDiceResult = rollFiveDices()
                    console.log("Roll Dices Successfully.")
                    console.log(`This is your result -> ${rollDiceResult}`)
                    console.log("Do you want to roll a dices again?")
                    rollDiceAgain = prompt("Y/N : ")
                } while (rollDiceAgain === 'Y')
                console.log("Please select your category to summary your score.")
                console.log("Yacht")
                console.log("Choice")
                console.log("Big Straight")
                console.log("Little Straight")
                console.log("Four of a Kind")
                console.log("Full House")
                console.log("Sixes")
                console.log("Fives")
                console.log("Fours")
                console.log("Threes")
                console.log("Twos")
                console.log("Ones")
                const selectCategory = prompt("Choose your category:")
                console.log(`Your choose ${selectCategory}`)
                console.log(`Here your score -> ${score(rollDiceResult, selectCategory)}`)
                console.log("Do you want to play again?")
                break
            case 'N':
                console.log("Oh OK, See you bro.")
                gameStatus = 0
                break
        }
    } while (gameStatus === 1)
}

startGame()