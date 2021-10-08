const sol = (nums) =>{
    let result =0;
    let sum =0;
    for(let i = 0; i<nums.length; i++){
           sum+=nums[i];
    }

    sum/=nums.length;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] > sum){
            result += nums[i] - sum;
        }
    }
   
    return result;
}

let input =[5, 2, 4, 1, 7 ,5];

console.log(sol(input));
