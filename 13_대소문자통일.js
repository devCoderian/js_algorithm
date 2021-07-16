const solution = (param) =>{
    let result = '';
    for(let v of param){
        if(v === v.toLowerCase()){
            v = v.toUpperCase();    
        }else{
            v = v.toLowerCase();    
        }
        result += v
    }

    return result
}

let input = 'StuDY'
console.log(solution(input))