// function recursive(num){
//     if(num === 0) return;
//     recursive(num--);
// }

// console.log(recursive(3));

// function factorial(x){
//     if (x === 0) return 1;

//     return x * factorial(x -1);
// }

// const num = 3;

// let result = factorial(num);

// console.log(`the factorial of ${num} is ${result}`);

// function MAX(x, y) {

//     if(x > y){
//         return x;
//     }else{
//         return y;
//     }
// }

// // console.log(MAX(100, 7));
// let nums = [1, -1, 4, 0, 10, 20, 12];

// console.log(nums.sort());
// console.log(nums.reverse());

// console.log(nums.sort());
// //x = 12, y =20
// let a_order = function(x, y){
//     console.log('x-y;',x, y,x-y)
//     return x-y; //>0 // y가 큰값이면 sort에서 위치를 바꿔준다.
// }
// console.log(nums.sort(a_order));
// let b_order = function(x, y){
//     console.log('y - x',x, y, y - x)
//     return y - x;
// }

let nums = [1, 2, 3, 4, 5];
let call_count = 0;

// let sum = nums.reduce((accumlator, item, index, array)=>{
//     console.log(accumlator, "\t", item, "\t", index);
//     call_count++;
//     return accumlator + item;
// })
// console.log(call_count); 
//왜 4개일까 첫번째는 0+첫번째요소 루프 안돌리고 먼저 첫번째요소, 즉 여기서는 1로 배정하고 시작
//accumlator= +item
//만약 초기값을 설정하고 싶으면 이니셜 밸류를 지정해준다. 지정안하면 0 그럼 다섯번 돈다.
let sum = nums.reduce((accumlator, item, index, array)=>{
    console.log(accumlator, "\t", item, "\t", index);
    call_count++;
    return accumlator + item;
},0)
console.log(call_count); 
console.log(sum)

function User(name){
    if(!new.target){
        return new User(name);
    }
    console.log(new.target);
}

let result_1 = User("jhon");
let result_2 = new User("jhon")