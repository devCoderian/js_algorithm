const sol = (a, b) =>{
    let count = 0;
    let result = 0;
    for(let i = 0; i<a; i++){
        if(b[i]=== 1 && b[i+1] ===1){
            count++;
            result += count
        }else if(b[i]=== 1 && b[i+1] !==1){
            count++;
            result += count
            count = 0;
        }else{
            count = 0;
        }
    }

  return result;
}

let a = 5;
let b = [
    10, 13, 10, 12, 15,
    12, 39, 30, 23, 11,
    11, 25, 50, 53, 15,
    19, 27, 29, 37, 27,
    19, 13, 30, 13, 19
]

console.log(sol(a, b))