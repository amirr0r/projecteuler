const _ = require('lodash')
const isPalindrome = str => String(str) === [...String(str)].reverse().join('')


const largestPalindrome = dimension => {
    const limit = Number("9".repeat(dimension)) + 1
    const fromN = "1" + "0".repeat(dimension - 1)
    const numbers = _.range(fromN, limit)

    let bigPalindrome = 0
    // I would be curious to see the result with Array.reduce() method
    for (x of numbers)
        for (y of numbers)
            if (isPalindrome(x * y) && x * y > bigPalindrome)
                bigPalindrome = x * y

    return bigPalindrome
}

console.log(largestPalindrome(3)) // 906609