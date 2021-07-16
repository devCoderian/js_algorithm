// function solution(input01){
//     let answer = input01.split("");
//     let count = 0;
//     for(let i = 0; i<answer.length; i++){
//         if(answer[i] === answer[i].toUpperCase()){
//             count++;
//         }
//     }
//     return count
// }
    
//     let input01= 'KoreaTimpGood';
//     console.log(solution(input01));

// function solution(input01){
//     let answer = input01.split("");
//     let count = 0;
//     for(let x of input01){
//         if(x === x.toUpperCase()){
//             count++;
//         }
//     }
//     return count
// }
    
//     let input01= 'KoreaTimpGood';
//     console.log(solution(input01));

    function solution(input01){
        let answer = input01.split("");
        let count = 0;
        for(let x of input01){
            if(x === x.toUpperCase()){
                count++;
            }
        }
        return count
    }
        
        let input01= 'KoreaTimpGood';
        console.log(solution(input01));