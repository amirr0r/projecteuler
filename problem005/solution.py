n = 2520
limit = 20

while len([x for x in range(1, limit + 1) if n % x != 0]) != 0:
  n += 2520
  
print(n) # 232792560