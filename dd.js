// for(let i= 2; i<=9; i++){
//     for(let j =1; j<=9; j++){
//         console.log(`${i} X ${j} = ${i*j}`)
//     }
// }

const checkAge = (age) =>{
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

console.log(checkAge(20))