//고차함수 -> 자신의 매개변수에 함수를 전달받는 것
//이미 빌트인 되어 있음
/*
function forEach(predicate, thisArg){
 배열요소 반복 -> for문 대신 사용   
    for(let i = 0; i<a.length; i++){
        predicate(a[i], i)
    }
}
*/
//콜백함수는 꼭 넘겨야 한다. 나머지는 생략가능

a = [10, 11, 12, 13, 14, 15]; 

a.forEach(function(v, i){
    //v는 배열의 요소, i는 인덱스
    console.log(v, i)
})


a.forEach(function(v, i){
    //v는 배열의 요소, i는 인덱스
    console.log(v, i, this)
    //this가 Args
},[1,2])

/*
function map(predicate, thisArg){
    let list =[]
    for(let i =0; i<a.length; i++){
        list.push(predicate(a[i], i));
    }        
}
*/
// let answer = a.map(function(v, i){
//     //return v*v+this;
//    
// },[1, 2]);
// console.log(answer);


let answer = a.map(function(v, i){
    //return v*v+this;
    if(v%2 == 0) return v;
},[1, 2]);
console.log(answer); //[ 10, undefined, 12, undefined, 14, undefined ]
//map은 원본배열과 길이는 동일하기때문에 undefined 들어감
/*
function filter(predicate, thisArg){
    let list =[]
    for(let i =0; i<a.length; i++){
        if(predicate(a[i], i) 참일경우){    
            list.push(predicate(a[i], i));
        }
    }        
}
*/
let answer2 = a.filter(function(v, i){
    //콜백함수가 참을 리턴했을 때만 원소를 저장한다.
    return v%2 == 0;
},[1, 2]);
console.log(answer2); // [10, 12, 14 ]
/*
function reduce(predicate, val){
    let result = val;(넘어온 값으로 초기화)
    for(let i =0; i<a.length; i++){
        result=predicate(result, a[i]);
    }        
    return result;
}
*/
let answer3 = a.reduce(function(acc, v){  // 콜백함수 인자 ->누적과 value
    //리듀스는 배열이 아니라 어떤값을 생성해서 반환
    return acc+v;
},0); //두번째 인자가 초기화값
console.log(answer3); // 75