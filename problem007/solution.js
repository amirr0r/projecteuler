const math = require('mathjs')

const primeNb = [2, 3, 5, 7, 11, 13]
const stPrime = n => {
    let i = 14
    while (primeNb.length !== n) {
        if (math.isPrime(i)) {
            primeNb.push(i)
        }
        i++
    }
    return primeNb[n - 1]
}

console.log(stPrime(10001)) // 104743