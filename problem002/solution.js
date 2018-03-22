let result = 0
let [a, b] = [1, 1]
// 4e6 === 4000000 ? true
while (a < 4e6) {
    [a, b] = [b, a + b]
    if (a % 2 === 0) {
        result += a
    }
}

console.log(result) // 4613732
