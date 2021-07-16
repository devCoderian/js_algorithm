//가운데문자출력
const sol = (param)=>{

        // let count = Math.floor(param.length/2)
        // let result;
        
        // if(param.length%2 == 0){ 
            //인덱스
        //     result = param.substring(count-1, count+1) 
        // }else{
        //     result = param.substring(count, count+1)     
        // }
        // return result

        let count = Math.floor(param.length/2)
        let result;
        //첫번쨰는 인덱스두번째는 개수
        if(param.length%2 == 0){ 
            result = param.substr(count-1,2) 
        }else{
            result = param.substr(count, 1)     
        }
        return result
       
    }

console.log(sol('study'))
console.log(sol('good'))