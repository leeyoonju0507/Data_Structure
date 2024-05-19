class Node {
    prev = null;
    next = null;
    data = null;

    constructor(data) {
        this.data = data
    }
}

class LinkedList {
    firstNode = null

    push(data) {
        if (this.firstNode === null) {
            this.firstNode = new Node(data);
        } else {
            const newNode = new Node(data);
            let lastNode = this.firstNode;
            while (true) {
                if (lastNode.next !== null) {
                    lastNode = lastNode.next
                } else {
                    lastNode.next = newNode;
                    newNode.prev = lastNode;
                    break 
                }
            }
        }
    }

    at(index){
        // 인덱스에 해당하는 만큼 이동해서 data를 return한다. 만약 node가 없거나 index가 없는 경우도 고려하기
        let node = this.firstNode;
        let cnt = 0;
        while(true){
            if(node===null){
                return '노드 없음';
            }else if(cnt===index){
                return node.data;
            }
            node = node.next;
            cnt++;
        }
    }

    delete(index){
        //지우려는 노드의 이전 노드의 next를 지우려는 노드의 다음 노드로 연결, 지우려는 노드의 다음 노드의 prev를 지우려는 노드의 이전 노드로 연결
        let node = this.firstNode;
        let cnt = 0;
        while(true){
            if(node===null){
                console.log('인덱스를 다시 입력하세요')
                break;
            }
            if(cnt===index){
                //지워야하는 node가 첫번째일때
                if(node.prev===null){
                    this.firstNode = node.next  
                }
                //지워야하는 node가 마지막일때
                else if(node.next===null){
                    const BeforeNode = node.prev
                    BeforeNode.next = null
                }
                //지원야하는 node가 중간일때
                else if(node.prev!==null&&node.next!==null){
                    const BeforeNode = node.prev;
                    const AfterNode = node.next;
                    BeforeNode.next = AfterNode;
                    AfterNode.prev = BeforeNode;
                }
                this.displayAll()
                break;
            }
            node = node.next;
            cnt++;
        }
    }

    insert(index,insertNum){
        let node = this.firstNode;
        let cnt = 0;
        const newNode = new Node(insertNum);
        while(true){
            //newNode를 첫번째 노드로 삽입할때
            if(index===0){
                this.firstNode = newNode;
                this.firstNode.next = node;
                node.prev = this.firstNode
                break;
            }
            //newNode를 중간 노드로 삽입할때
            else if(cnt === index){
                const beforeNode = node.prev;
                beforeNode.next = newNode;
                newNode.prev = beforeNode;
                newNode.next = node;
                break;
            }
            //newNode를 마지막 노드로 삽입할때
            else if(node.next===null){
                node.next = newNode;
                break;
            }
            node = node.next;
            cnt++;
        }
        this.displayAll();
    }

    displayAll() {
        let node = this.firstNode;
        if (node === null) {
            console.log("빈 배열입니다")
            return;
        }
        while (true) {
            console.log(node.data);
            if (node.next === null) {
                break
            }
            node = node.next
        }
    }
}


const linkedList = new LinkedList();

// 추가
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);

// linkedList.displayAll();

// // 검색
// console.log("검색:"+linkedList.at(3))
//
// // 삭제
// linkedList.delete(3);
//
// // 삽입
// linkedList.insert(0, 10);