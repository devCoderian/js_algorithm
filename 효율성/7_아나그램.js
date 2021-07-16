//아나그램 두 문자열이 알파벳의 나열 순서와 일치하면 두 단어는 아나그램이라 한다.
const sol = (arr1, arr2) =>{
    let answer="YES";
    let sH = new Map();
    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(let x of str2){
        if(!sH.has(x) || sH.get(x) === 0) return = "NO"
        //키도 있고 갯수도 0이아니다.
        sH.set(x, sH.get(x)-1);
    }
    console.log(sH);
    
    return answer;
    
}

let a="AbaAeCe";
let b="baeeACA"

//키가 존재하느냐
//개수가 맞느냐