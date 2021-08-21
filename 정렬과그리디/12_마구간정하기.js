function count(check, dist){
    console.log('함수실행');
    let cnt=1, ep = check[0];
    //방금전 말을 배치한 좌표
    for(let i = 0; i< check.length; i++){
        if(check[i]-ep >= dist){ 
            //가장 가까운 거리
            cnt++; //배치한 말의 수
            ep=check[i]; //말을 배치한 좌쵸
            console.log('ep', ep);
        }   
    }
    return cnt;
}
//num 마리수 , arr 좌표
const sol =(num, arr) =>{
    let answer;
    arr.sort((a, b)=> a-b);
    let lt =1;
    console.log('ar', arr[arr.length-1])
    let rt = arr[arr.length-1]; //rt에 값 누적
    console.log('rt', rt);
    //이분검색
    while(lt <= rt){
        let mid = parseInt((lt+rt)/2);
        console.log('mid', mid)
        if(count(arr, mid)>= num){
            console.log('mid', mid);
            answer = mid; 
            lt = mid+1;
        }else rt = mid-1;
    
    }
    console.log('answer', answer);
    return answer;
}
let arr = [1, 2, 8, 4, 9]
let num = 3;
console.log('답', sol(3, arr))
