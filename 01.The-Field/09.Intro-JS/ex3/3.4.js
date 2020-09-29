let arr = [1, 2, 7, 4, 5];
let min;
let max;

for (let elem of arr) {
    min === undefined && (min = elem);
    max === undefined && (max = elem);
    elem < min && (min = elem);
    elem > max && (max = elem);
}

console.log("Min = " + min + " and Max = " + max);