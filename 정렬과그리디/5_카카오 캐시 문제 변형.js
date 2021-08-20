const sol = (vol, len,arr) =>{
    // let answer = [];
    
    let answer = Array.from({length:vol}, () => 0);
    // for(let i= 0; i<arr.length; i++){
    //     answer.push(0);
    // }
    arr.forEach(x => {
        // let check= false;
        let j = -9999;

        //x란 값이 캐쉬에 있는지 없는지 확인
        for(let i=0; i<vol; i++) {
            //요소와 첫번째 for문 같을 경우 그대로 유지 //0일시
            if(x===answer[i]) j=i;  //요소가 있는지 없는지 검사
            //있을 경우 위치를 j에 저장
            //없을 경우 j초기값 그대로 가져감
        }
        //비어있을 경우
        if(j === -9999){ 
            //미스날 경우 뒤에서 부터 땡기기
            for(let i=vol-1; i>=1; i--){
                answer[i]=answer[i-1];
            }
        }
        else{ //다 차있으면 위치 바꿈
            //있는 지점부터
            for(let i=j; i>=1; i--){
                answer[i]=answer[i-1]; //땡기기
            }
        } 
        answer[0]=x;  //현재 위치에 인덱싱
    });

    return answer;
}

   /*
    unshift 사용
    let answer = Array.from({length:vol}, () => 0);

    arr.forEach(x => {
        let pos = -1;
        for(let i = 0; i<size; i++) {
            if(x=== answer[i]) pos = i;
        }
        if(pos === -1){
            answer.unshift(x);
            if(answer.length>size){
                //사이즈 크기 유지를 위해 pop시키기
                answer.unshift(x);
                if(answer.length>size) answer.pop();
                
            }else{
                answer.splice(pos,1);
                answer.unshif(x);
            }
        }
    });

    return answer;

    */
   
   let vol = 5;
   let len = 9;
   let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

   console.log(sol(vol,len, arr));