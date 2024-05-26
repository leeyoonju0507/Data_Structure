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
    rootNode

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
