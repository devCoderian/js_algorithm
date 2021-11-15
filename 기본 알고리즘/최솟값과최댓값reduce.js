let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];

const reducerOne = (a, c) => {
return a + c;
}
//순차적 합
const reducerTwo = (a, c) => {
    return a - c;
}
//순차적 빼기

const reduceMax = (a, v) => a > v ? a:v;
const reduceMin = (a, v) => a < v ? a:v;

console.log(a.reduce(reducerOne));
console.log(a.reduce(reducerTwo));
console.log(a.reduce(reduceMax));
console.log(a.reduce(reduceMin));