let result = 0;
let x = '123123';
while(true){
    if(x.length === 1){
        result += parseInt(x, 10); //result = '0' + result;
        break;
    }
    let y = x.split('');
    console.log(y);
    result+= parseInt(y.pop(), 10) ;
    x = y.join('');
    console.log(x);
}

console.log(result)

//재귀
function 각자리수(숫자){
    if(숫자.length === 1){
        return parseInt(숫자, 10);
    }
    return 각자리수(숫자.slice(0, 숫자.length-1)) + parseInt(숫자[숫자.length-1]);
}

console.log(각자리수('123123'))