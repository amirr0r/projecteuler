import math
from functools import reduce

add = lambda x, y: x + y

def eratostheneSieve(n):
  arr = [True] * n
  arr[1] = False
  arr[n - 1] = False
  
  for i in range(2, int(math.sqrt(n))):
      if (arr[i]):
          j = i * i
          while j < n:
              arr[j] = False
              j += i
  
  nb = [x for x in range(n) if arr[x]]
  return reduce(add, nb)

print(eratostheneSieve(int(2e6))) # 142913828922