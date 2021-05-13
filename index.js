// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0,2)
const returnLastTwoDrivers = (arr) => {
    const l = arr.length
    return arr.slice(l-2,l)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = (multiplier) => (value) => value * multiplier 
function fareDoubler(fare){
    return fare * 2
}
function fareTripler(fare){
    return fare * 3
}

const selectDifferentDrivers = (arr, func) => func(arr)

let testArr = ["Sally", "Bob", "Allen"]
returnFirstTwoDrivers(testArr)
returnLastTwoDrivers(testArr)