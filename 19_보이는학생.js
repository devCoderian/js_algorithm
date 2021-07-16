// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 
// 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때,
// 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 
// 구하는 프로그램을 작성하세요. 
// (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

const sol = (param1, param2) =>{

let count = 1;
let max;
    max = param2[0]
    for(let i = 1; i< param2.length; i++){
       if(max<param2[i]){
        max = param2[i]
        count++;
       }
    } 
    return count;
}

let param02 = [130 , 135, 148, 140, 145, 150, 150,  153]
console.log(sol(6, param02))

