const sol = (m, arr) =>{
    let answer = 0, lt = 0,sum = 0;
    for(let rt = 0; rt<arr.length; rt++){
        sum += arr[rt];
        while(sum>m){
            aum-arr[lt++];
        }
        answer += (rt-lt+1)
    }
    return answer;
}

let a = [1, 2, 3, 1, 1, 2];
console.log(sol(6, a));