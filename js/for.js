let sum = (accumulator, currentValue) => accumulator + currentValue;
let calcSum = (arr) => arr.reduce(sum);

generate = (k) => {
    let arr = [];
    for (let i = 1; i < k + 1; i++) {
        arr.push(i);
    }
    return arr;
}

draw = (n) => {
    const gridSize = n * 2 - 1;

    let gridWidth = [gridSize]; // this is reverse odd array
    let temp = gridSize-2;
    while (temp > 0) { 
        gridWidth.push(temp);
        gridWidth.unshift(temp);
        temp -= 2;
    }

    let reverseOddArr = gridWidth;
    let numArr = generate(calcSum(reverseOddArr));

    let items = [];
    for (x of reverseOddArr) {
        let holder = [];
        while (holder.length < x) {
            holder.push(numArr[0]);
            numArr.shift();
        }
        items.push(holder.join(""));
    }

    let result = [];
    for (x of reverseOddArr) {
        let space = "-".repeat((gridSize - x) / 2)
        result.push(space + items[0] + space)
        items.shift();
    }
    return result.join('\n');
}

console.log(draw(4));