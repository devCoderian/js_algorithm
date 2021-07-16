const sol = (need, plan) =>{
    let answer = "YES"
    let queue = need.split('');
    for(let x of plan){
        if(queue.includes(x)){
            if(X != queue.shift()) return "NO";
        }
    }

    return answer;
}

let a = "CBA";
let b = "CBDAGE";

console.log(sol(a, b));