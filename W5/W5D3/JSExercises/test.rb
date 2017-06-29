
def fib(n)
  return [0,1].take(n) if n <= 2

  array = fib(n - 1)
  array += [array[-2] + array[-1]]
end

p fib(5)
