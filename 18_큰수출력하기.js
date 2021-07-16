const sol = (param1, param2) =>{
    let result = param2.split(" ")
    let answer =[];
    answer.push(Number(result[0]))
    
    for(let i = 1; i< result.length; i++){
        if(Number(result[i]) < Number(result[i+1])){
            answer.push(Number(result[i+1]))
        }
    } 
    return answer;
}

console.log(sol(6, '7 3 9 5 6 12'))


