def  isPythagoreanTriplet(a, b, c):
  return a * a + b * b == c * c 

def pythagoreanTriplet(n):
  for a in range(1, n):
    for b in range(a + 1, n):
      for c in range(b + 1, n):
        if (a + b + c == 1000) and isPythagoreanTriplet(a, b, c):
          return a * b * c

print(pythagoreanTriplet(1000)) # 31875000