import { range } from 'lodash'

const square = a => a * a
const isPythagoreanTriplet = (a, b, c) => square(a) + square(b) === square(c)

const pythagoreanTriplet = n => {
    for (let a of range(1, n)) {
        for (let b of range(a + 1, n)) {
            for (let c of range(b + 1, n)) {
                if (a + b + c === n && isPythagoreanTriplet(a, b, c))
                    return (a * b * c)
            }
        }
    }
}

console.log(pythagoreanTriplet(1000))// 31875000