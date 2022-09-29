function removeDupes(str) {
  let target = "";
  for (let i = 0; i < str.length; i++) {
    if (target.indexOf(str[i]) == -1) {
      target += str[i];
    }
  }
  return target;
}

console.log(removeDupes("aabbccdd"));

const set = new Set(str);

const newArr = [];
arr.forEach((element) => {
  if (!newArr.includes(element)) {
    newArr.push(element);
  }
});
console.log(newArr);
