//큐도 자바스크립트에서 배열 사용
//3번 왕자는 다시 넣지말고 꺼내버리면 된다.
const sol = (n, k) =>{
    let answer;
    // let queue = Array.from({length:n});//길이가 n짜리인 배열객체가 생김
    let queue = Array.from({length:n}, (v, i) => i+1);
    while(queue.length){
        for(let i =1; i<k; i++) queue.push(queue.shift());
        queue.shift();
        if(queue.length === 1) answer=queue.shift()
    }
    return answer;

}