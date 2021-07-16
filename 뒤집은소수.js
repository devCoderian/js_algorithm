const isPrime = (num) =>{
    if(num === 1) return false;
    // 16 = 1
    for(let i = 2; i<=num/2; i++){

    } 
}
const sol = (a, b) =>{
    let answer = [];
    for(let x of b){
        let res = 0; //결과
        //원본이 필요없어서temp 필요없음
        while(x){ 
            let t = x%10; 
            res = res*10+t; //두번째 숫자
            x=parseInt(x/10);//몫 구하기
        }
        if(isPrime(res)) answer.push(res);
        
    }
    return answer;
}



// let res = 0;
// let t = 32%10; 
// res = res*10+t; 
// console.log(res) // 2