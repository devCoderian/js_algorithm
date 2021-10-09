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
            result[num % 10]++;
            num /= 10;
            num = parseInt(num);
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