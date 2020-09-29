function sortArray(arr) {
    let sortedArr = [];
    let min;
    while (arr.length !== 0) {
        min = undefined;
        for (let i = 0; i < arr.length; i++) {
            min === undefined && (min = arr[i]);
            arr[i] < min && (min = arr[i]);
        }
        sortedArr.push(min);
        arr.splice(arr.indexOf(min), 1);
    }
    return sortedArr;
}

let arr = [5, 4, 2, 2, 1, 10, 7, 4];
console.log(arr);
console.log(sortArray(arr));