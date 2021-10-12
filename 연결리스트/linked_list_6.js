//Node(): data와 pointer를 가지고 있는 객체
function Node(data){
    this.data = data;
    this.next = null;
}

//LinkedList() :head와 length를 가지고 있는 객체
function LinkedList(){
    this.head = null;
    this.length = 0;
}

//size() :연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function(){
    return this.length;
}

//isEmpty() : 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function(){
    return this.length === 0;
}

//printNode(): 노드 출력
LinkedList.prototype.printNode = function(){
    for(let node = this.head; node!= null; node = node.next){
        // console.log('node', node, 'this.head', this.head, 'node.next', node.next)
        process.stdout.write(`${node.data} ->`);
    }
    console.log(null);
}

//append(): 연결 리스트 가장 끝에 노드 추가 
LinkedList.prototype.append = function(value){
    let node = new Node(value);
    let current = this.head;
    if(this.head == null){
        this.head = node;
    } else {
        while(current.next !== null){
            current = current.next;
        }
        current.next = node;
    }

    this.length++;
}
//insert() : position 위치에 노드 추가
LinkedList.prototype.insert = function(value, position = 0){
    //포지션 범위 체크
    if(position < 0 || position > this.length){
        return false;
    }
    //인덱스 현재 위치 저장
    //prev 이전 노드값
    //current 인덱스를 순환하면서 내가 들어가야할 노드의 앞위치를 찾는다.
    let node = new Node(value), current = this.head, index = 0, prev;
    
    //첫번째에 넣어라
    // 0번째 
    if(position === 0){
        node.next = current; //현재 head는 null next에 null을 넣고
        this.head = node; //head에 node 넣기
    }else{
        //다른 포지션 만큼 인덱스 순회
        while(index++<position){
            prev = current; //처음에는 헤드의 노드
            current = current.next; // 헤드의 넥스트 //처음에는 널 ->
        }
        //새로운 노드 연결
        node.next = current;
        prev.next = node;
    }
    this.length++;

    return true;
}

//remove(): values 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
    let current = this.head, prev;
    //첫번째도 아니고 끝도 아닐때 마지막요소까지 탐색
    //데이터가 아니니까 트루
    //p값 그대로 c
    while(current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }

    //value 없음 //마지막요소
    if(current.data != value){
        return null;
    }
    //첫번째 요소
    if(current === this.head){
        this.head = current.next;
    }else{
        prev.next = current.next
    }
    
    this.length--;

    return current.data;
}

LinkedList.prototype.removeAt = function(position = 0){
    if(position < 0 || position >= this.length){
        return null;
    }
    let current = this.head, index = 0, prev;

    if(position === 0){
        this.head = current.next;
    }else{
        while(index++ < position){
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
    }
    this.length--;

    return current.data;
}


LinkedList.prototype.indexOf = function(value){
 let current = this.head, index = 0, prev;

 while(current != null){
     if(current.data === value){
         return index;
     }

     index++;
     current = current.next; 
 }
  return -1;
}

//indexof + removeAt = remove
LinkedList.prototype.remove2 = function(value){
    let index = this.indexOf(value);
    return this.removeAt(index);
}
let ll  = new LinkedList();
ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.removeAt(1000));
console.log(ll.remove(4));
ll.printNode();
console.log(ll.size())