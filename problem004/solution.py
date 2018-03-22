
def isPalindrome(nb):
  return str(nb) == str(nb)[::-1]

def largestPalindrome(dimension):
  limit = int("9" * dimension) + 1
  numbers = [str(x) for x in range(limit)]
  digitNb = list(filter(lambda x: len(str(x)) == dimension, numbers))
  digitNb = [int(x) for x in digitNb]
  palindromes = [x * y for x in digitNb for y in digitNb if isPalindrome(x * y)]
  
  return max(palindromes)

print(largestPalindrome(3)) # 906609
