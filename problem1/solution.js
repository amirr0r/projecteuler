const range = n => [...Array(n).keys()]
const add = (a, b) => a + b
const isMultiple = (num, x) => num % x == 0
const result = (limit) => range(limit)
    .filter(num => isMultiple(num, 3) || isMultiple(num, 5))
    .reduce(add)

console.log(result(1000)) // 233168