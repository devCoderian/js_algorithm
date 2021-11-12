const sol = (array) => {
     
    // for(let item of array){
    //     console.log(item); 
    // }
    console.log('체크');

    let result = '';
    for(let item of array){
        console.log(item.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0')); //모든 공백을 문자열 없이 출력
        console.log(parseInt(item.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2));   
        //이진법 숫자로 바꿔줌 -> console.log(parseInt(item.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2));   
        //아스키로 변경
        console.log(String.fromCharCode(
            parseInt(item.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2)
            ));
        // 다시 연결시켜주기
        result += String.fromCharCode(
        parseInt(item.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2)
        );
    }

    console.log(result)
    // replace(/+/g, '1') -> +는 정규표현식 문법이 따로 있음
    // return answer;

    //나온것을 다시 문자로 바꾸기
    //이진법을 십진법으로 고치고 십진법으로 된 문자를 
    //다시 문자로 변환하는 문제
    
}

// 인코딩 -> 문자나 기호들의 집합을 컴퓨터에서 표현하는 방법
// 아스키 utf-8 등등
// 아스키 코드 표드 
let array =[
'   + -- + - + -   ',
'   + --- + - +   ',
'   + -- + - + -   ',
'   + - + - + - +   ',
];

// for of 는 요소
// for in는 index

sol(array);

