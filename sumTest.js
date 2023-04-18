const sum = require("./lib/sum")
// console.log("sum(2, 2):", sum(2, 2))

let result = sum(2, 2)
let expected = 4
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}

result = sum(2, 3)
expected = 5
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}
