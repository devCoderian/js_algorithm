const sol = (arr) =>{
    let answer = Number.MIN_SAFE_INTEGER;
    //피로연 시간 받기
    let T_line=[];
    for(let x of arr){
        T_line.push(x[0], 's');
        T_line.push(x[1], 'e');
    }

     console.log(T_line);
    T_line.sort((a, b)=>{
        if(a[0] === b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
        else return a[0]-b[0];
    })

    for(let x of T_line){
        if(x[1] === 's') cnt++;
        else cnt--;
        answer=Math.max(answer, cnt);
    }
    console.log(T_line);
    return answer;
}

let arr= [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]
console.log(sol(arr));