// 퀵 정렬은 불안정 정렬 에 속하며, 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬 에 속한다.
// https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html
// 리스트 안에 있는 한 요소를 선택한다. 이렇게 고른 원소를 피벗(pivot) 이라고 한다.
// 피벗을 기준으로 피벗보다 작은 요소들은 모두 피벗의 왼쪽으로 옮겨지고 피벗보다 큰 요소들은 모두 피벗의 오른쪽으로 옮겨진다.
// https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html

let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 퀵정렬(입력배열){
    let 입력배열의길이 = 입력배열.length;

    if (입력배열의길이 <= 1){
        return 입력배열
    }

    let 피벗값 = [입력배열.shift()]
    let g1 = []
    let g2 = []

    for(let i in 입력배열){
        if(입력배열[i]<피벗값){
            g1.push(입력배열[i]);
        }else{
            g2.push(입력배열[i]);
        }
    }


    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(g2));
}

console.log(퀵정렬(입력값))