const sol = (nums) =>{
    let result =[];

    let faker = [];
    let sum =0;
    for(let i = 0; i<nums.length; i++){
           sum+=nums[i]
           
    }

    sum = sum/nums.length
    console.log(sum);

    // for(let i = 0; i<nums.length; i++){
    //     for(let j = i+1; j< nums.length; j++){
    //        sum+=nums[i]
    //     }
    // }
   
    return result;
}

let input =[5, 2, 4, 1, 7 ,5];

console.log(sol(input));
