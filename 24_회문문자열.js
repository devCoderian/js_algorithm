//회문 문자열
//앞에서 읽으나 뒤에서 읽으나

// const sol = (param) =>{

//         let first = param.substring(0, 1)
//         let second = param.substr(param.length-1, 1)
//         if(first.toUpperCase() === second || first.toLowerCase() === second){
//             console.log('YES')
//         }else{
//             console.log('NO')
//         }
//     //}
// }


// const sol = (param) =>{

//     let answer = "YES";
//     param = param.toLowerCase();
    
//     for(let i = 0; i<Math.floor(param.length/2); i++){
//         if(param[i] !== param[param.length-i-1]) return "NO";//대각선 체크할때 썼던 방식
//     }
//     return answer;
// }

// console.log(sol('gooG'));
// sol('Foof')
// sol('Good')

const sol = (param) =>{

    let answer = "YES";
    param = param.toLowerCase();
    if(param.split("").reverse().join('')!== param){
        return "NO"
    };

    return answer;
}

console.log(sol('gooG'));
console.log(sol('Foof'));
console.log(sol('Good'));