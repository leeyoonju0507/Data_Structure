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
        //지우려는 노드의 이전 노드의 next를 다음 노드로 연결
        let node = this.firstNode;
        let cnt = 0;
        while(true){
            if(node===null){
                console.log('노드 없음');
                return;
            }
            if(cnt===index){
                let frontNode = node.prev;
                frontNode.next = node.next;
                node.prev = frontNode;
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
            if(node===null){
                console.log('노드 없음');
                break;
            }
            if(cnt === index){
                const frontNode = node.prev;
                frontNode.next = newNode;
                newNode.prev = frontNode;
                newNode.next = node
                node.prev = newNode
                this.displayAll();
                break;
            }
            node = node.next;
            cnt++;
        }

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
console.log("검색:"+linkedList.at(2))
//
// // 삭제
// linkedList.delete(2);
//
// // 삽입
linkedList.insert(2, 10);