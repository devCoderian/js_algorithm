const sol = (vol, len,arr) =>{
    // let answer = [];
    
    let answer = Array.from({length:vol}, () => 0);
    // for(let i= 0; i<arr.length; i++){
    //     answer.push(0);
    // }
    arr.forEach(x => {
        // let check= false;
        let j = -9999;
        for(let i=0; i<vol; i++) {
            //요소와 첫번째 for문 같을 경우 그대로 유지 //0일시
            if(x===answer[i]) j=i;  //요소가 있는지 없는지 검사
        }
        //비어있을 경우
        //체크해서 0이 아닐 경우 맨위에 넣음
        if(j === -9999){ 
            for(let i=vol-1; i>=1; i--){
                answer[i]=answer[i-1];
            }
        }
        else{ //다 차있으면 위치 바꿈
            for(let i=j; i>=1; i--){
                answer[i]=answer[i-1];
            }
        } 
        answer[0]=x;  
    });

    return answer;
}

    //있으면 위치 바꿈
    // for(let i = 0; i<arr.length; i++){
    //     answer.push(arr[i]);
   /*   for(let j = i+1; j<arr.length; j++){
     arr[i][j] = arr[j][i]
     } */
   // }
   /*  if(arr[i].includes(v)) */
    //없으면 맨 위에 넣음
//     return answer;
//    }
   
   let vol = 5;
   let len = 9;
   let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

   console.log(sol(vol,len, arr));