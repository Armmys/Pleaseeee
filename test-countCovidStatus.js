// Problem#countCovidStatus
function countCovidStatus(covidStatusArray) {
    const result = {}
    if (covidStatusArray === null || covidStatusArray === undefined) return undefined
    if (covidStatusArray?.length === 0) return {}
    for (const covidStatus of covidStatusArray) {
        if (covidStatus === 'negative and low risk' || covidStatus === 'positive' || covidStatus === 'negative and high risk') {
            if (result[covidStatus] === undefined) result[covidStatus] = 1
            else result[covidStatus]++
        }
    }
    return result
}

// Test Section
let covidStatusArray = []
covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'negative and high risk', 'positive', 'negative and low risk' ]
console.log(countCovidStatus(covidStatusArray))
covidStatusArray = ['positive', 'negative and low risk', 'positive']
console.log(countCovidStatus(covidStatusArray))
covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'abnormal', 'negative and high risk', 'positive', 'normal' ]
console.log(countCovidStatus(covidStatusArray))
covidStatusArray = ['covid']
console.log(countCovidStatus(covidStatusArray))
covidStatusArray = []
console.log(countCovidStatus(covidStatusArray))
covidStatusArray = null
console.log(countCovidStatus(covidStatusArray))
covidStatusArray = undefined
console.log(countCovidStatus(covidStatusArray))
