//올바른괄호
//LIFO

                 //0이 아니면 인형을 만난 것
const sol =(str)=>{
    let answer = "YES";
    let st = [];
    for(let x of str){
        if(x==='(') st.push(x);
        else{
            if(st.length === 0) return 'NO'
            st.pop();
        }
    }
    return answer;

}

let val = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

console.log(sol(val2))
