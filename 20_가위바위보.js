// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, 
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 예를 들어 N=5이면
// 회수 1 2 3 4 5
// A의 정보 2 3 3 1 3
// B의 정보 1 1 2 2 3
// 승자 A B A B D
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램
// 을 작성하세요.

const sol = (a, b, c)=>{
    let result = [];
    
    // for(let i = 0; i<a; i++){
    //     if(b[i] === 1){
    //         if(c[i] === 1) result[i] = 'D'
    //         if(c[i] === 2) result[i] = 'B'
    //         if(c[i] === 3) result[i] = 'A'
    //     }else if(b[i] == 2){
    //         if(c[i] === 1) result[i] = 'A'
    //         if(c[i] === 2) result[i] = 'D'
    //         if(c[i] === 3) result[i] = 'B'
    //     }else{
    //         if(c[i] === 1) result[i] = 'B'
    //         if(c[i] === 2) result[i] = 'A'
    //         if(c[i] === 3) result[i] = 'D'
    //     }
    // }   
    for(let i = 0; i<a; i++){
        if(b[i] === c[i]) result[i] = 'D'
        else if(b[i] === 1 && c[i] === 3) result[i] = 'A'
        else if(b[i] === 2 && c[i] === 1) result[i] = 'A'
        else if(b[i] === 3 && c[i] === 2) result[i] = 'A'
        else result[i] = 'B'
    }    
    return result
}

let a = 5;
let b = [2, 3, 3, 1, 3]
let c = [1, 1, 2, 2, 3]

console.log(sol(a, b, c))