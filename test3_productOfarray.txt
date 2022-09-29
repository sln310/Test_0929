function produceOfArray(value) {
  let result = 1;
  for (let i = 0; i < value.length; i++) {
    result *= value[i];
  }
  return result;
}

console.log(produceOfArray([1, 2, 3, 4]));
