const sol = (arr)=>{
    let answer = arr;
    for(let i = 0; i<arr.length; i++){
        let temp = arr[i], j;
        for(j = i-1; j>=0; j--){
            if(arr[j]>temp) arr[j+1] = arr[j];
            else break;
        }
        arr[j+1] = temp
    }
    return answer;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(sol(arr));















// const sol = (arr)=>{
//     let answer = arr;
//     for(let i = 0; i<arr.length; i++){
//         let tmp = arr[i], j;
//         for(j = i-1; j>=0; j--){
//            if(arr[j]>tmp) arr[j+1] = arr[j];
//             (arr[j]) 값이 tmp 보다 작은 값이 발견되면 멈추기
//             else break;
//         }
//         j가 끝남.
//         arr[j+1] = tmp
//     }
//     return answer;
// }
// let arr = [13, 5, 11, 7, 23, 15];
// console.log(sol(arr));







//j는 i-1 ~ 0까지 돈다.
//tmp - arr[i]값 
//arr[j] > tmp 뒤쪽으로 복사
//arr[j+1] = arr[j];
//j보다 크면 뒤로 넘어감