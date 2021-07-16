const solution = (param) =>{
    let result = '';
    for(let v of param){
        if(v === v.toLowerCase()){
            v = v.toUpperCase();    
        }
        result += v
    }

    return result
}

let input = 'ltisTimeToStudy'
console.log(solution(input))