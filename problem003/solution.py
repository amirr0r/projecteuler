def biggestPrimeFactor(n):
    i = 2
    while i * i <= n:
        if n % i:
            i += 1
        else:
          # like n = int(n / 2)
            n //= i
    return n

print(biggestPrimeFactor(600851475143)) # 6857