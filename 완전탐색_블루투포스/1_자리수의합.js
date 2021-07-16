const sol = (n, arr) =>{
    console.log(arr)
    let answer, max = Number.MIN_SAFE_INTEGER; //아주 작은 숫자로 초기화 됨
    let sum = 0;

        for(let x of arr){
      /*
            let sum= 0,  tmp=x;//x원본 저장
            while(tmp){
                sum += (tmp%10);
                tmp= Math.floor(tmp/10);//소ㅅ점 내림 몫 정수로 반환
            }
            console.log(sum)
            if(sum > max){
                max = sum; 
                answer =x; //원본
            }else if(sum === max){
                if(x> answer) answer = x;                
            }
        }
    */
    let sum = x.toString().split('').reduce((a, b) => a+Number(b), 0);
    
        if(sum> max){
            max = sum;
            answer = x;
        }else if(sum === max){
            if(x> answer) answer =x;
        }
    }
        return answer;
    }

n = 7;
arr = [128, 460, 603, 40, 521, 137, 123]

console.log(sol(n, arr))