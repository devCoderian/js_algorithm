//선택정렬
let arr = [10, 11, 9, 2, 3, 6, 5];
let result = [];

// while(arr.length){
//     result.push(Math.min.apply(null, arr));
//     arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
//     console.log(result);
// }


//for 문 방식이면 arr길이가 달라져서 짤림 -> arr.length 대신 8처럼 고정값 숫자를 줘야함 -> while로 바꾸자
// for (let i = 0; i<arr.length; i++){
//     result.push(Math.min.apply(null, arr));
//     //pop은 뒤에서 빼내는 것
//     //push는 뒤에서 넣어주는 것
//     //shift 앞에서 꺼내는 것
//     //unshift는 앞에서 넣어주는 것
//     arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
//     console.log(result);
//  }
 


const fMin = (arr) =>{
    let min = arr[0];

    for (let i = 1; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
   
    return min;
}

while(arr.length){
    console.log(fMin(arr));
    result.push(fMin(arr));
    arr.splice(arr.indexOf(fMin(arr)), 1);
    //result.push(fMin(arr));
    // console.log(`result${result}`);
    // console.log(`arr${arr}`);
    // console.log(result);
}

// for (let i = 0; i<arr.length; i++){
//     console.log(fMin(arr))
//     //result.push(fMin(arr));
//     // console.log(`result${result}`);
//     // console.log(`arr${arr}`);
// }

// console.log(result);
// let check = 0;

// const min = (arr) =>{
//     let min = arr[0];
//     for (let i = 1; i<arr.length; i++){
//         if(min > arr[i]){
//             min = arr[i];
//             arr.splice(i,1);
//             result.push(min);
//         }
//     }
//     console.log(min);
   
//     return min;
// }