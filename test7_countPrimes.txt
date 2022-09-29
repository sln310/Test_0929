function countPrimes(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(countPrimes(100));

// countPrimes(100);
