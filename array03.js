const sol = (nums) =>{
    const accord = (x,y) => y-x;
    let maxList = nums.sort(accord);
    let max = [maxList[0], maxList[1]];
    return max;
}

let input =[
    [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
    [3, 7, -14, 2, -6, 13, -20, -2, -7, -6, -17, -5, 14, -9, 19],
    [3, 5, -10, 2]
]
;
for(let i = 0; i<input.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(sol(input[i]));
}

