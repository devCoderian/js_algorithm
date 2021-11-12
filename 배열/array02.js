const sol = (nums) =>{
    let result =[];
    let need = [1, 1, 2, 2, 2, 8];
    for(let i = 0; i<nums.length; i++){
        result[i] = need[i]-nums[i];   
    }
    return result;
}

let input =[
    [0, 1, 2, 2, 2, 7],
    [2, 1, 2, 1, 2, 1],
    [0, 1, 1, 5, 3, 6]
]
;
for(let i = 0; i<input.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(sol(input[i]));
}

