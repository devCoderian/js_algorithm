const sol = (a, b) =>{
    let count = 0;
    let result = [];
    for(let i = 0; i<a; i++){
        result.push(1)
    }
    // result.sort()
    console.log(b)
    console.log(result)
    for(let i = 0; i<a; i++){
        for(let j = 0; j<a; j++){
            if(b[i] < b[j]){
                result[i]++;
            }       
        }
    }

  return result;
}

let a = 5;
let b = [
    87, 89, 92, 100, 76,
]

console.log(sol(a, b))