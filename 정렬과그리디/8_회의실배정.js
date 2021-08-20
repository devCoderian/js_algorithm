const sol = (arr) =>{
    //끝나는 시간으로 먼저 정렬
    //끝나는 시간을 시작 시간과 비교
    //끝나는 타임이 다 같으면 시작시간으로 오름차순
    let answer = 0;
    arr.sort((a, b)=>{
        if(a[1] === b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    })
    let et = 0;
    for(let x of arr){
        if(x[0] >= et){
            answer++;
            et=x[1];
        }
    }
    return answer;
}

let arr= [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]
console.log(sol(arr));