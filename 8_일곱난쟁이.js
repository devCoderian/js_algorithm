// function solution(arr){
//     let result = 0;
//     let answer = [];
//     for(let i = 0; i<arr.length; i++){
//             result += arr[i]
//             if(result <= 100){
//                 answer.push(arr[i])
//             }
//     }
    
//         return answer;
//     }
    
    // let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
    // console.log(solution(arr));
    // // push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
    // //splice 인덱스값 하나 제거

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
function solution(arr){
    let result = 0;
    let answer = arr;
    // console.log(answer)
    result = arr.reduce((a, b) =>a+b)
    for(let i = 0; i<arr.length; i++){
            for(let j= i+1; j<arr.length+1; j++){
                if((result-(arr[i]+arr[j]))=== 100){
                    arr.splice(j, 1)
                    arr.splice(i, 1)
                }
            }
    }
    console.log(answer)
        return answer;
    }
    
    
console.log(solution(arr));
    // push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
    //splice 인덱스값 하나 제거
    //https://im-developer.tistory.com/103