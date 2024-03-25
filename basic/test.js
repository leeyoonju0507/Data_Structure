class Node{
    data = null;
    prev = null;
    next = null;

    constructor(data){
        this.data = data;
    }
}

const firstNode = new Node(1);
const secondNode = new Node(2);
const thirdNode = new Node(3);
const fourthNode = new Node(4);

firstNode.next = secondNode;

secondNode.prev = firstNode;
secondNode.next = thirdNode;

thirdNode.prev = secondNode
thirdNode.next = fourthNode

fourthNode.prev = thirdNode;

//print
let node = firstNode;
while(true){
    console.log(node.data);
    if(node.next===null){
        break;
    }
    node = node.next;
}
