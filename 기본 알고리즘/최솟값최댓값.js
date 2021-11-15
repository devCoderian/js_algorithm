let a = [5, 10, 66, 77, 54, 32, 11, 15, 9];

a.sort();
console.log(a[0]); //최솟값
console.log(a[a.length-1]); //최댓값 -> 오류가 난다.
//이유는?
//사전식 정렬 10과 9중에 큰값을 9라 생각한다. 

Math.min(10, 20);
Math.max(10, 20); 
//array를 넣지 못한다.
Math.max.apply(10, 20)
Math.max.apply(null, a); //-> a에서 가장 큰 값 출력

//알고리즘
// let m = 0;
let m = a[0];

for(let val of a){
    if(val > m){
        m = val
    }
}
console.log(m);

// 최대 
// let m = 999;

for(let val of a){
    if(val < m){
        m = val
    }
}
console.log(m);

