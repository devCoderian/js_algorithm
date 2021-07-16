//올바른괄호
//LIFO

const sol =(str)=>{
    let answer;
    let st = [];
    for(let x of str){
      if(x===')'){
        //닫는괄호를 만날시 여는괄호까지 제거
            while(st.pop()!=='(');//계속 팝하기 
      }else st.push(x);
      console.log(st);
    }
    answer= st.join('');
    return answer;
}

let val = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
 
console.log(sol(val))
