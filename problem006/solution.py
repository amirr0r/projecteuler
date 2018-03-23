from functools import reduce

add = lambda x, y: x + y
numbers = range(1, 101)
numbersSquares = [x * x for x in numbers]
numbersSquaresSum = reduce(add, numbersSquares)

numbersSum = reduce(add, numbers)
squareNumbersSum = numbersSum * numbersSum

print(squareNumbersSum - numbersSquaresSum) # 25164150