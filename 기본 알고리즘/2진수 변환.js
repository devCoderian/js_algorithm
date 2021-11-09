/*
11을 2진수로 변환
2 11 1
2  5 1
2  2 0
   1 

-> 1011
*/
let x = 11;
let result = '';
while(true){
    if(x%2 === 0){
        result += '0' // 거꾸로 출력되어야 한다. // result = '0'+result;
    }else{
        result += '1'; // result = '1'+result;
    }

    x = Math.floor(x/2); //몫이 필요
    // Math.ceil() 소수점 올림 
    // Math.floor() 버림
    // Math.round() 반올림 
    if(x === 1 || x === 0){
        result += String(x); // result = String(x) +result;
        break;
    }
}
    console.log(result) 
    console.log(result.split('').reverse().join(''));
    console.log(result) 
    //거꾸로 출력하기
    // result.split('') -> 배열이 됨-> ["1", "1", "0", "1"]
    // result.split('').reverse() -> ["1", "0", "1", "1"]
    // result.split('').join("") -> 1011 (문자열)
    //result.split('').join("!") -> 1011 (문자열)

    function 이진법(숫자){
        if(숫자 ===1 || 숫자 === 0){
            return String(숫자)
        }
        return 이진법(Math.floor(숫자/2)) + String(숫자%2);
    }

    console.log(이진법(11)); 
/*
    이진법(11) -> 이진법(Math.floor(11/2)) + String(11%2); -> 이진법(5) + String(1);
    이진법(5) -> 이진법(Math.floor(5/2)) + String(5%2); -> 이진법(2) + String(1)
    이진법(2) -> 1 + String(0)
    이진법(1) -> 1

    밑에서 위로 올라옴
    이진법(11) -> 이진법(5) + String(1); -> 101 + 1
    이진법(5) -> 이진법(2) + String(1) -> 10 + 1
    이진법(2) -> 1 + String(0)
    이진법(1) -> 1

*/