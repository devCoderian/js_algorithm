const sol = (s, e) =>{
    let result =[];

    for(let i = 0; i< 10; i++){
        result[i] = 0;
    }

    //1. s <= n <= e
    let num; 
    for(let i = s; i<= e; i++){
        num = i;
        //2.n -> %/ 
        while(num !== 0){
            result[num % 10]++; //10의 나머지 1의 자리를 알 수 있음
            num /= 10;
            num = parseInt(num); //나머지 정수화 나머지 연산자 //0이 될때가지 수행
        }
    }

    return result;

    // let count = 0; 
    // for(let i =0; i<nums.length; i++){
    //     for(let j = 0; j<result.length; j++){
    //         if(nums[i] === j){
    //             result[j] += count;
    //             count++;
    //         }
    //     }
    // }

    // return result;
}

let input =
    [129, 137];
console.log(sol(input[0], input[1]))