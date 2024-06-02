// 이진 탐색 트리

// 1. 정의
// 이진 트리다(노드의 연결로 구현)
// 임의의 어떤 노드에 대해 그 왼쪽 부분 트리의 모든 데이터 < 임의 노드 데이터 < 오른쪽 부분 트리의 모든 데이터

// 2. 활용
// 데이터를 빠르게 찾을 수 있다
// 이진 탐색 트리는 딕셔너리와 셋을 구현하는데 쓰임

// 3. 성질
// 이진 탐색 트리를 in-order 방법으로 순회하면 저장된 데이터들을 정렬된 순서대로 출력할 수 있다
// 이진 탐색 트리는 완전 이진 트리가 아닌 경우가 더 많다
// 그렇기 때문에 노드가 n개 있을 때, 높이 h가 항상 O(lg(n))이라고 할 수 없다
// 최악의 경우를 예로 들자면, 이진 탐색 트리의 높이는 O(n)
// 예를 들면 이진 탐색 트리에 데이터로 1, 2, 3, 4, 5, 6을 순서대로 삽입하면 트리가 한쪽으로 편향

// 1. 접근

// 2. 탐색
// 이분 탐색과 비슷하다(시간 h)

// 3. 삽입
// 새로운 노드를 만들고 > root부터 비교하면서 알맞은 위치 발견(시간 h) > 추가

// 6. 삭제
// 우선 노드를 찾아야 한다
// 말단 노드를 삭제하는 경우는 걍
// 중간에 자식이 하나인 노드를 지우는 경우 자식 노드를 부모 자리로 올려 보내면 그만임
// 중간에 자식이 2개인 노드를 지우는 경우
class BinaryNode {
    constructor(data) {
        this.data = data
        this.parent = null;
        this.leftChild = null
        this.rightChild = null
    }
}

class BinarySearchTree {
    constructor(data) {
        this.rootNode = new BinaryNode(data);
    }

    push(data) {
        let currentNode = this.rootNode;
        while (true) {
            if (currentNode.data < data) {
                if (currentNode.rightChild == null) {
                    currentNode.rightChild = new BinaryNode(data);
                    currentNode.rightChild.parent = currentNode;
                    break;
                } else {
                    currentNode = currentNode.rightChild;
                }
            } else {
                if (currentNode.leftChild == null) {
                    currentNode.leftChild = new BinaryNode(data);
                    currentNode.leftChild.parent = currentNode;
                    break;
                } else {
                    currentNode = currentNode.leftChild;
                }
            }
        }
    }

    search(data) {
        let currentNode = this.rootNode;
        while (currentNode.data !== data) {
            if (currentNode.data < data) {
                currentNode = currentNode.rightChild;
            } else {
                currentNode = currentNode.leftChild;
            }
            if (currentNode == null) {
                return null;
            }
        }
        return currentNode;
    }

    delete(data) {
        let deleteNode = this.search(data);
        if (deleteNode.leftChild === null && deleteNode.rightChild === null) {
            if (deleteNode.parent.leftChild.data === deleteNode.data) {
                deleteNode.parent.leftChild = null;
            } else {
                deleteNode.parent.rightChild = null;
            }
        } else if (deleteNode.leftChild !== null && deleteNode.rightChild !== null) {
            // 조금 복잡
            let rightMinNode = deleteNode.rightChild;
            while (true) {
                if (rightMinNode.leftChild !== null) {
                    rightMinNode = rightMinNode.leftChild;
                } else {
                    rightMinNode.parent.leftChild = null;
                    rightMinNode.parent = null;

                    if (deleteNode.parent.leftChild.data === deleteNode.data) {
                        deleteNode.parent.leftChild = rightMinNode;
                        rightMinNode.leftChild = deleteNode.leftChild;
                        rightMinNode.rightChild = deleteNode.rightChild;
                    } else {
                        deleteNode.parent.rightChild = rightMinNode;
                        rightMinNode.leftChild = deleteNode.leftChild;
                        rightMinNode.rightChild = deleteNode.rightChild;
                    }
                    break;
                }
            }
        } else if (deleteNode.leftChild !== null) {
            deleteNode.leftChild.parent = deleteNode.parent;
            if (deleteNode.parent.leftChild.data === deleteNode.data) {
                deleteNode.parent.leftChild = deleteNode.leftChild;
            } else {
                deleteNode.parent.rightChild = deleteNode.leftChild;
            }
        } else {
            deleteNode.rightChild.parent = deleteNode.parent;
            if (deleteNode.parent.leftChild.data === deleteNode.data) {
                deleteNode.parent.leftChild = deleteNode.rightChild;
            } else {
                deleteNode.parent.rightChild = deleteNode.rightChild;
            }
        }
    }

    preOrder(parentNode) {
        // 출력, 왼쪽재귀, 오른쪽재귀
        if (parentNode === null) {
            return;
        }
        if (parentNode === undefined) {
            parentNode = this.rootNode;
        }
        console.log(parentNode.data);
        this.preOrder(parentNode.leftChild);
        this.preOrder(parentNode.rightChild);
    }
}

const bst = new BinarySearchTree(100);
bst.push(110);
bst.push(120);
bst.push(90);
bst.push(105);
bst.push(60);
bst.push(109);
bst.push(101);
bst.push(106);

bst.delete(105)
bst.preOrder();
