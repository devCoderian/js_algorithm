// 합
// 재귀함수
// 순번 f(n) n return 최종값
// 1 f(100) 100 return 100 +f(99) 100+99+98+97+...2+1
// 2 f(99) 99 return 99 +f(98) 99+98+97+...2+1
// 3 f(98) 98 return 100 +f(97) 98+97+...2+1
// 4 f(97) 97 return 100 +f(96) 97+...2+1
// .....
// 2 f(2) 2 return 2 +f(1) 2 + 1
// 1 f(1) 1 return 1 -> return 값 1 if문 

//반복문은 1부터 시작 밑에서부터 위로 올라가는 방식
//재귀는 위에서 밑으로 내려가는 방식 내가 나를 호출해서 마지막까지 가는 방법


/*
let n = 100;

function f(n){
    if (n <= 1){ //종료조건 -> 재귀함수에서는 종료조건이 무조건 있어야 한다.
        //없으면 무한 반복
        return 1
    }
    return n + f(n-1)
}

console.log(`재귀함수 : ${f(100)}`);
*/

//곱 
// 순번 f(n) n return 최종 
// 1 f(5) 100 return 5 +f(4) 100+99+98+97+...2+1
// 2 f(4) 99 return 99 +f(98) 99+98+97+...2+1
// 3 f(3) 98 return 100 +f(97) 98+97+...2+1
// 4 f(2) 97 return 100 +f(96) 97+...2+1
let n = 100;

function f(n){
    if (n <= 1){ //종료조건 -> 재귀함수에서는 종료조건이 무조건 있어야 한다.
        //없으면 무한 반복
        return 1
    }
    return n * f(n-1)
}

console.log(`재귀함수 : ${f(5)}`);
