//유효한 팰린드롬
//알파벳만 가지고 회문검사를 함
const sol = (s) =>{
    let answer = "YES";
    s = s.toLowerCase().replace(/[^a-z]/g, '')
    console.log(s);
    if(s.split('').reverse().join('') !== s) return "NO";

    return answer;
}