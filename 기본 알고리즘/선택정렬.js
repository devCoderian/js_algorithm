let arr = [5, 10, 66, 77, 54, 32, 11, 15];
let result = [];
// let length = arr.length;
// console.log(result);

while(arr.length){
    result.push(Math.min.apply(null, arr));
    arr.splice(indexOf(Math.min.apply(null, arr)), 1);
}

console.log(result)