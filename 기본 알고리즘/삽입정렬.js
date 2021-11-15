let arr = [5, 10, 66, 77, 54, 32, 11, 15];
let result = [];
let length = arr.length;
console.log(result);

function functionIndex(result, check){
    for(let i in result){
        if(check < result[i]){
            return i
        }
    }
    return result.length
}

for(let i = 0; i< length; i++){
    check = arr.shift()
    index = functionIndex(result, check)
    result.splice(index, 0, check); 
    console.log(`인덱스 : ${index}`);
    console.log(`result : ${result}`);
}