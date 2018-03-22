from functools import reduce

def isMultiple(a, b):
  return a % b == 0

limit = 1000
numbers = [x for x in range(limit)]
numbersFiltered = list(filter(lambda x: isMultiple(x, 3) or isMultiple(x, 5), numbers))
result = reduce(lambda x, y : x + y, numbersFiltered)

print(result) # 233168