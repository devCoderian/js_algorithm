// 공통원소 구하기
const sol = ()=>{
    //각각의 집합을 정렬
    //교집합이기 때문에 더 탐색할 필요 없음
    //arr1.sort();//sort만 할 경우 문자로 변환 -> 한자리수만 오류가 안남 -> 정렬 기준을 줘야 함
    //정렬기준
    arr1.sort((a,b) =>a-b)
    arr2.sort((a,b) =>a-b)
    let p1 = p2 = 0;
    while(p1<arr1.length && p2<arr2.length){
        if(arr[p1] === arr2[p2]){
            answer.push(arr1[p1++]);
            p2++;
        }
        else if(arr1[p1]<arr2[p2]) p1++;
        else p2++;
    }
    return answer;
}

a = [1, 3, 5, 9, 2]
b = [3, 2, 5, 7, 8]