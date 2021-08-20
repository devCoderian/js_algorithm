const solution =(arr)=>{
        let answer=arr;
        answer.sort((a, b)=>{
            if(a[0] === b[0]) return a[1]-b[1];
            else return a[0]-b[0];
        }); //콜백 a-b 오름차순
            return answer;
    }

            let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
            console.log(solution(arr));
