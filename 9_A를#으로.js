function solution(input){
    
    let result = input.split("")

    for(let i = 0; i<result.length; i++){
        if(result[i] === 'A'){
            result[i] = '#'
        }
    }
    return result.join('')
    }
    
    let input= 'JAN';
    console.log(solution(input));