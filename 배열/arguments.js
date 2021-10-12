function sum(){
    let total = 0;
    for (let i =0; i<arguments.length; i++){
        total += arguments[i];
    }
    console.log(arguments instanceof Array)
    return total;
}

let sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg(){
    let newArr = Array.prototypes.slice.call(arguments);
    // call()은 상위 context를 변경하는 메서드이고
    // arguments는 함수의 매개변수에 접근할 수 있는 속성이다.
    //이 코드가 존재하는 함수의 매개변수로 넘어온 값들을 array로 변환하겠다는 것이다.


    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
}
