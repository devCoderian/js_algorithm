//숫자만 추출
/*
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.

*/

//parseInt사용
//isNaN()문자열에서 숫자인지 판별하는 함수
const sol = (param) =>{
    let answer = [];
    for(let v of param){
        // if(isNaN(v) !== true){
        //     answer.push(v)
        // }
        if(!isNaN(v)) answer += v
    }
    return answer
    //return parseInt(answer) 앞에 0을 없애줌
    //
}

console.log(sol('fdhkj2khdksf33fkhh3'))