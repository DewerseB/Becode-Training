let arr = [1, 2, 3, 4, 5];
let arr2 = [];

for (let elem of arr) {
    arr2.push(elem);
}
console.log(arr2);

let arr3 = [...arr];
console.log(arr3);