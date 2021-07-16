//학급회장
const sol =(s) =>{
    let answer;
    let sH = new Map();
    for(let x of s){
        if(sH.has(x)) sH.set(x, sH.get(x)+1)
        else sH.set(x, 1);
    }
    console.log(sH);
    let max = Number.MIN_SAFE_INTEGER;
    for(let [key, val] of sH){
        if(val>max){
            max = val;
            answer = key;
        }
    }
    return answer;
}

//해쉬맵 사용
//let sh = new Map();
//key, value
//sh.set('B', 1)