function solution(input01, input02){
    let answer = input01.split("");
    let count = 0;
    let check = input02;
    for(let i = 0; i<answer.length; i++){
        if(answer[i] === check){
            count++;
        }
    }
    return count
}
    
    let input01= 'COMPUTERPROGRAMMING';
    let input02= 'R';
    console.log(solution(input01, input02));