const sol = (nums) =>{
    let result =[];

    let str =""; 
    for(let i = 0; i<nums; i++){
        //공백처리
       for(let j = 0; j<nums-i-1; j++){
        str+=" ";
       }
       for(let j = 0; j<i* 2+1; j++){
        str+="*"
       }
       str+="\n"
    }
    return str;
}

let input =5;

console.log(sol(input));
// for(let i = 0; i<input.length; i++){
//     process.stdout.write(`#${i+1}`);
//     console.log(sol(input[i]));
// }

