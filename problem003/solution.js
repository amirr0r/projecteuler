const biggestPrimeFactor = n => {
    let i = 2
    while (i * i <= n) {
        if (n % i) {
            i++
        } else {
            n /= i
        }
    }
    return n
}

console.log(biggestPrimeFactor(600851475143)) // 6857