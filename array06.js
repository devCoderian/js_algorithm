const sol = (nums, num) =>{
    let result =[];

    let faker = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            if(nums[i]+nums[j] === num){
                faker[0] = i;
                faker[1] = j;
            }
        }
    }
   
    return faker;
}

let input =[3,3];

console.log(sol(input, 6));

