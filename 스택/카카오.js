const sol = (board, moves) =>{
    let answer = 0;
    let stack = [];
    moves.forEach(pos =>{
        for(let i = 0; i<board.length; i++){
            if(board[i][pos-1] !== 0){ //0이 아닐시
            ㅣ  let tmp = board[i][pos-1];
                board[i][pos-1] = 0;
                if(tmp === stack[stack.length-1]){
                    stack.pop();
                    answer+=2;
                }
                else stack.push(tmp);
                break; //하나만 pop
            }
        }
    });
    return answer;
}
