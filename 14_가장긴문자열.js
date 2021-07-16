const solution = (param, param2) =>{
    let result = param2.split(" ")
    let max  =Number.MIN_SAFE_INTEGER;
    let answer;
    for(let v of result){
        if(v.length>max){
            max = v.length;
            answer = v
        }

    }
   
   
    return answer
}

let input01 = 5
let input02 =
'teacher time student beautiful good';
console.log(solution(input01, input02))