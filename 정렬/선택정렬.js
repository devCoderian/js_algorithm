//선택정렬
let arr = [10, 11, 9, 2, 3, 6, 5];
let result = [];
let check = 0;
function min(arr){
    for(let i = 0; i<arr.length; i++){
        check = arr[i];
        if (check > arr[i+1]){
            check = arr[i+1];
        }
    }
    console.log(check);
    return check;
}
// for (let i = 0; i<arr.length; i++){
//     check = arr[i];
//     for(let j = i+1;j<arr.length; j++){
//         console.log(`arr[i]${arr[i]}`);
//         console.log(`arr[j]${arr[j]}`);
//         if(check > arr[j]) {
//             check = arr[j];
//         }
//         // arr.splice(j,1);
//         console.log(`check${check}`);
//     }
//     result.push(check);
//     // arr.splice(i,1);
//     console.log(`result${result}`);
//     console.log(`arr${arr}`);
// }

console.log(result);