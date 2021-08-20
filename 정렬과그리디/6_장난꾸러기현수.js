
            const solution =(arr)=>{
                let answer=[];
                let sortArr=arr.slice();//기본형 데이터면 깊은 복사 
                //
                //.sort 는 문자 정렬
                sortArr.sort((a, b)=>a-b); //콜백 a-b 오름차순
                for(let i=0; i<arr.length; i++){
                    if(arr[i]!==sortArr[i]) answer.push(i+1);
                }
                return answer;
            }
// 오름차순 정렬로 변환
// 바꾼 정렬과 비교 
            let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
            console.log(solution(arr));

            // let answer=[];
            // let sortArr=arr.slice();
            // sortArr.sort((a, b)=>a-b);
            // for(let i=0; i<arr.length; i++){
            //     if(arr[i]!==sortArr[i]) answer.push(i+1);
            // }
            // return answer;