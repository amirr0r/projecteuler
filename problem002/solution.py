result = 0
a, b = 1, 1

while(a < 4e6):
  a, b = b, b + a
  if a % 2 == 0:
    result += a

print(result) # 4613732