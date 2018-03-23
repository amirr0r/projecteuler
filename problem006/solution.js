import { range } from 'lodash'

const add = (a, b) => a + b
const square = a => a * a

const nb = range(1, 101)
const nbSquares = nb.map(square)
const nbSquaresSum = nbSquares.reduce(add)

const nbSum = nb.reduce(add)
const squareNbSum = square(nbSum)

console.log(squareNbSum - nbSquaresSum) // 25164150
