// 트리

// 용어
// 루트 노드 / 형제 노드 / 리프 노드 / 자식 노드 / 부모 노드 / 깊이 / 레벨 / 높이 / 부분 트리

// 종류
// binary tree: 각 노드가 최대 2개의 자식 노드를 가질 수 있다
// complete binary tree: 마지막 바로 직전 레벨까지 모든 노드가 다 채워지고 마지막 레벨은 왼쪽부터 차례대로 노드가 다 차있다
// complete binary tree: 노드가 n개이면 높이 h는 O(로그n)

// 활용
// 1. 계층 관계를 가진 데이터를 저장할 때
// 2. 정렬(힙 정렬) 압축(후프만 코드)을 매우 똑똑하게 처리하고 싶을 때
// 3. 우선순위 큐(힙으로), 딕셔너리(BST), 셋(BST)와 같은 추상 자료형을 구현할 때

// 우리는 다양한 트리 중에서 이진 트리의 구현에 집중해 본다
class Node {
    data
    leftChild
    rightChild

    constructor(data) {
        this.data = data
        this.leftChild = null
        this.rightChild = null
    }
}

class BinaryTree {
    constructor(rootData) {
        this.rootNode = new Node(rootData)
    }

    pushLeft(parentData, childData) {
        const node = this.findNode(parentData);
        if (node === null) {
            return;
        }
        node.leftChild = new Node(childData);
    }

    pushRight(parentData, childData) {
        const node = this.findNode(parentData)
        if (node === null) {
            return;
        }
        node.rightChild = new Node(childData);
    }

    // 순회: 프리오더, 인오더, 포스트오더
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

    // 검색
    findNode(searchData, parentNode = undefined) {
        if (parentNode === undefined) {
            parentNode = this.rootNode;
        }

        if (searchData === parentNode.data) {
            return parentNode;
        }

        if (parentNode.leftChild !== null) {
            const leftResult = this.findNode(searchData, parentNode.leftChild);
            if (leftResult !== null) {
                return leftResult;
            }
        }
        if (parentNode.rightChild !== null) {
            const rightResult = this.findNode(searchData, parentNode.rightChild);
            if (rightResult !== null) {
                return rightResult;
            }
        }
        return null;
    }
}

const bt = new BinaryTree(4);
bt.pushLeft(4, 5);
bt.pushRight(4, 3);
bt.pushLeft(5, 1);
bt.pushLeft(3, 9);
bt.pushRight(3, 6);
bt.pushRight(5, 2);
bt.preOrder();
