function indexPrime(param1) {
  var arr = [];
  for (let i = 2; i <= param1 * param1; i++) {
    for (let j = 2; j <= i; j++) {
      if (i === j) {
        arr.push(i)
      } if (i % j === 0) {
        break;
      }
    }
  }
  return arr[param1 - 1]
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
