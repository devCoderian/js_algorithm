// const sol = (nums) =>{
    //let result =[];
//     return result;
// }

// let input = [

//];
// for(let i = 0; i<input.length; i++){
//     process.stdout.write(`#${i+1}`);
//     console.log(sol(input[i]));
// }
// console.log(sol());

//내가 짠 정답
const accord = (x,y) => x-y
const sol = (array) =>{
    let arrayList = [...array];
    let min = arrayList.sort(accord)
    let answer= [];

   array.filter((element, index)=>{
         if(element === min[0]){
            answer.push(index)
         }
    });
   
    return answer;
}

// let array = [5, 2, 10, 2];
let array = [
    [5, 2, 10, 2],
    [4, 5, 7, 4, 8],
    [11, 15, 12, 16, 11, 12],
];
for(let i = 0; i<array.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(sol(array[i]));
}

// 정답

//1.최소값
//let min = 100; //주어진 가장 큰수로 초기화
/*let min = Number.MAX_SAFE_INTEGER; 
for(let i = 0; i<num.length; i++){
    if(min > nums[i]){
        min = nums[i];
    }
}
//최소값에 해당하는 위치 index
let count= 0;
for(let i = 0; i<num.length; i++){
    if(min === nums[i]){
       result[count++] = i; //count => 0  다음 배열에 접근
       //count => 1
    }
}
*/