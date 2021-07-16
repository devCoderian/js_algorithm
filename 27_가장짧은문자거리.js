function solution(k, rates) {
    var answer = 0;
    let count = 1; 
    var buy = 0;
    let max = 0;
    for(let i = 0; i<rates.length; i++){
            if(k <= rates[i] && count === 0){
                answer =k-rates[i] ;
                k =  rates[i];
                count = 1;
                max = rates[i] 
                for(let j =i; j<rates.length; j++){  
                    if(max<rates[j+1]){
                        max = rates[j+1]
                    }
            }
                
                        console.log('max',max)
                        if(k < rates[i]){
                            count = 1;
                        }else{
                            console.log(max-k)
                            answer += max-k;
                            k = max
                        count = 0;
                        }
                
                }
                 
            
               
            }
   
        

 
    return answer;
}

  var k = 1000;
  var rates = [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100]
  
 console.log('d',solution(k, rates));