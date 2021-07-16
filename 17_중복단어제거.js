//string -> indexof
const solution = (param) =>{
    let answer = input02.split(" ");
    let result=[];
    result = answer.filter((v, i)=> {
        //true일때만 따로 뽑아서 배열화시킴
        // if(answer.indexOf(v) === i){
        //     return true
        // }else{
        //     return false
        // }
        return answer.indexOf(v) === i
    });
    
    return result
}

let input01 = 5
let input02 = 
'good time good time student'
console.log(solution(input01))