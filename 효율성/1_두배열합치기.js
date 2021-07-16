//sort 함수는 시간복잡도 nlogn
//투 포인터 알고리즘 -> p1, p2 따로 탐색 for문으로 시작
//시간복잡도 O(n+m)


//arr[p1]  < arr2[p2] push 되면 +1

const sol = (arr1, arr2) =>{
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1=p2=0; //twopointer
    while(p1<n && p2<m){ //둘중 하나가 탐색 끝난 경우
        if(arr[p1] <= arr[p2])  answer.push(arr[p1++]);
        else answer.push(arr2[p2++]);
    }
    //포인터가 초기화 안되니까 
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]);
}



let a = [1, 3, 5];
let b= [2, 3, 6, 7, 9];
console.log(sol(a, b))