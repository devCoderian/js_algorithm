const sol = (nums) =>{

    let result =[];
    //1. 9명(배열 총합) = 7명(100) + 2명(faker 합)
    let sum = 0;
    for(let i = 0; i<nums.length; i++){
        sum += nums[i]
    }

     //9명 - 7명 -2명에 대한 합 숫자
    sum -= 100; // -> 2명의 값

  //2.for 두 요소의 합이 faker 2명에 대한 합 숫자와 같은지 비교 -> i, j
  let faker = [];
  for(let i = 0; i<nums.length; i++){
      for(let j = i+1; j<nums.length; j++){
        if(nums[i]+nums[j]=== sum){
            faker[0] = i;
            faker[1] = j;
            break;
        }
      }
      if(faker.length !== 0) break;
  }
  //3.faker 두명을 제외하고 나머지 배치값을 result에 넣어준다.
    let count = 0;
    for(let i = 0; i<nums.length; i++){
        if(faker[0] !== i && faker[1] !== i){
            result[count++] = nums[i];
        }
    }
    return result;
}

let input =[
    [1, 5, 6, 7, 10, 12, 19, 29, 33],
    [25, 23, 11, 2, 18, 3, 28, 6, 37],
]
;
for(let i = 0; i<input.length; i++){
    process.stdout.write(`#${i+1}`);
    console.log(sol(input[i]));
}

