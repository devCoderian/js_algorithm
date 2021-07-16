//string -> indexof
const solution = (param) =>{
    let answer = "";
    console.log(param.indexOf("s")) // 1 첫번째로 발견된 인덱스 번호
    console.log(param.indexOf("s", 2)) // 1번 인덱스부터 찾아라 
    //없으면 -1 리턴
    for(let i = 0; i<param.length; i++){
       // console.log(param[i], i , param.indexOf(param[i]))
        if(param.indexOf(param[i]) === i){
            answer += param[i]
        }
    }
    return answer
}

let input01 = 'ksekkset'
console.log(solution(input01))

//indexof를 이용해 특정 문자 찾기

//string -> indexof
const solution01 = (param) =>{
    let answer = 0;
    let pos = param.indexOf("k")//

    while(pos !== -1){
        answer ++;
        pos = param.indexOf("k", pos+1)
    }
    return answer
}

let input02 = 'ksekkset'
console.log(solution01(input02))