//문자열 뒤집기
let x = 11;
let result = 'jungian';
while(true){
    if(x.length === 1){
    result += x;
    break;
    }
    //pop 마지막 꺼를 꺼낸다.
    // result += String(x.pop()); -> string에는 pop이없고 array에 사용가능
    let y = x.split('');
    console.log(y);
    result += String(y.pop());
    x = y.join('');
    console/log(x);
}

console.log(result);


    function 문자열역순(문자){
      if(문자.length ===1){
        return 문자
      }
    //slice처럼 배열로 변환해서 pop써도 됨
    //0부터 -1 맨마지막 값 빼기
    //   return 문자열역순(문자.slice(0, 문자.length-1))+문자[문자.length-1] 정순
    return 문자[문자.length-1]+ 문자열역순(문자.slice(0, 문자.length-1))
    }

    console.log(문자열역순('정이안')); 