import { range } from 'lodash'

let n = 2520
let limit = 20
const isMultiple = x => n % x === 0

while (range(1, limit + 1).filter(isMultiple).length !== limit)
    n += 2520

console.log(n) // 232792560