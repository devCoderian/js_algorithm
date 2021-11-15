let arr = [5, 10, 66, 77, 54, 32, 11, 15];

const div = (arr) => {
    let result = [];
    if(arr.length <= 1){
        return arr
    }
    let check = parseInt(arr.length/2); 

    let g1 = div(arr.slice(0, check));
    let g2 = div(arr.slice(check, ));

    while(g1.length !== 0 && g2.length !== 0){
       
        if(g1[0]<g2[0]){
            //result.push(g1[0]);
            result.push(g1.shift());
        }else{
            result.push(g2.shift());
        }
    }

    while(g1.length !== 0){
        result.push(g1.shift());
    }

    while(g2.length !== 0){
        result.push(g2.shift());
    }

    return result
}

console.log(div(arr))