const sol = (arr) =>{

    let answer = 0;
    arr.sort((a, b)=> a-b);
    let lt = 0, rt = arr.length-1;
    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        if(arr[mid]===target){
            answer=mid+1;
            break;
        }else if(arr[mid]>target) rt=mid-1;
        else lt=mid+1;
    }
   
    return answer;
}

let arr= [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]
console.log(sol(arr));