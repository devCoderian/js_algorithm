function count(songs, num){
    //num은 mid -> 용량
    let cnt = 1, sum = 0; //cnt 는 장수 sum은 용량
    console.log('songs',songs)
    for(let x of songs){
        console.log('x',x)
        console.log('num',num)
        if(sum+x > num){
            cnt++;
            sum = x;
        }else sum+=x;

        //
    }
    return cnt;
}
const sol =(num, arr) =>{
    let answer;
    let lt = Math.max(...arr); //max는 배열이 아니라 인자가 넘어가야함
    // let check = Math.max(arr); 
    // console.log(check); -> NaN
    console.log(lt);
    //전개연산자 arr[0], arr[1], arr[2]
    let rt = arr.reduce((a, b) => a+b, 0); //rt에 값 누적
    console.log(rt);
    //이분검색
    while(lt <= rt){
        let mid = parseInt((lt+rt)/2);
        console.log(mid);
        console.log(arr)
        if(count(arr, mid)<= num){
            answer = mid; 
            rt = mid-1;
        }else{
            lt = mid+1;
        }
    }
    console.log(answer);
    return answer;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num = 3;
console.log('답', sol(3, arr))

//결정 알고리즘 -> 이분검색
//범위정하기
//lt 최소값 제일 긴 노래한곡의 용량이 되어야함
//rt 노래를 다 더한 곡 혹은 그 이상의 큰 수 -> 어차피 이분검색하면 반으로 잘림
//logn
//여기서는 lt= 9, rt=45
//mid = 9+45/2 27
//중간값을 기준으로 찾아나감
//rt를 27로바꿈
//rt를 17로 바꿈
//lt가 rt보다 커질때까지 계속 탐색한다.
