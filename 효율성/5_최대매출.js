const sol = (m, arr) =>{
    let answer = 0, sum = 0;
    for(let i = 0; i<k; i++)sum += arr[i];
    answer = sum;
    for(let i =k; i< arr.length; i++){
        sum += (arr[i]-arr[i-k]);
        answer = Math.max(answer, sum);
    }
    return answer;
}

let a = [1, 2, 3, 1, 1, 2, 20, 35, 4, 2];
console.log(sol(6, a));

// 안녕하세요. 저는 26일부