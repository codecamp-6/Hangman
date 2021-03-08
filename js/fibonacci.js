const fibo = (n) => {
  let arr = [0, 1];
  console.log(arr[-1]);
  console.log(arr[-2]);
  while (arr.length - 1 <= n) {
    
    arr.push(arr[-1] + arr[-2]);
    
  }
  return arr[-1];
};

console.log(fibo(3));
