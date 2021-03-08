// find maximum salary

let salariesArr = {
  John: 100,
  Pete: 300,
  James: 300,
  Mary: 250,
  Amy: 400,
};

const topSalary = (salaries) => {
  if (salaries == {}) return null;
  const max = Object.entries(salaries).reduce(reducer);
  const result = [max.splice(0, 2), ...max];
  return result;
};

const reducer = (acc, cur) => {
  if (cur[1] > acc[1]) {
    return cur;
  } else if (cur[1] == acc[1]) {
    return [...acc, cur];
  } else {
    return acc;
  }
};

console.log(topSalary(salariesArr));

//etc

let arr = [];
for (let i = 1; i < 102; i++) {
  let divisible = [];
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      divisible.push(j);
    }
  }
  if (divisible.length === 2) {
    arr.push(i);
  }
}
console.log(arr);
