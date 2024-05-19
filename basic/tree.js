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
    rootNode

    constructor(rootData) {
        this.rootNode = new Node(rootData)
    }

    // 추가
    pushLeft(parentData, childData) {
        const node = this.findNode(parentData);
        if (node === null) {
            return;
        }
        node.leftChild = new Node(childData);
    }

    // 추가
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
    
    inOrder(parentNode) {
        // 왼쪽재귀, 출력, 오른쪽재귀
        if (parentNode === null) {
            return;
        }

        if (parentNode === undefined) {
            parentNode = this.rootNode;
        }
        this.preOrder(parentNode.leftChild)
        console.log(parentNode.data);
        this.preOrder(parentNode.rightChild)
    }

    postOrder(parentNode) {
        // 왼쪽재귀, 오른쪽재귀, 출력
        if (parentNode === null) {
            return;
        }

        if (parentNode === undefined) {
            parentNode = this.rootNode;
        }
        this.preOrder(parentNode.leftChild)
        this.preOrder(parentNode.rightChild)
        console.log(parentNode.data);
    }

    // 검색
    findNode(searchData, parentNode) {
        // if(parentNode === undefined){
        //     parentNode = this.rootNode;
        // }
        // if(searchData === parentNode.data){
        //     return parentNode;
        // }
        // this.findNode(searchData,parentNode.leftChild);
        // this.findNode(searchData,parentNode.rightChild);
        if(parentNode === undefined){
            parentNode = this.rootNode;
        }
        if(searchData === parentNode.data){
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
    // 삭제
    deleteNode(searchData, parentNode){
        if(parentNode === undefined){
            parentNode = this.rootNode;
        }
        //부모노드의 왼쪽 자식노드에서 삭제할 데이터를 찾으면
        if(parentNode.leftChild !== null && searchData === parentNode.leftChild.data){
            const deleteNode = parentNode.leftChild
            //삭제할 노드의 자식이 0개인지 1개인지 2개인지
            //자식 0개
            if(deleteNode.leftChild===null && deleteNode.rightChild===null){
                parentNode.leftChild = null;
            }
            //자식 1개
            if(deleteNode.leftChild!==null && deleteNode.rightChild===null){
                if(deleteNode.leftChild!==null && deleteNode.rightChild===null){
                    parentNode.leftChild = deleteNode.leftChild;
                }
            }
            if(deleteNode.leftChild===null && deleteNode.rightChild!==null){
                if(deleteNode.leftChild===null && deleteNode.rightChild!==null){
                    parentNode.leftChild = deleteNode.rightChild;
                }
            }
            //자식 2개
            if(deleteNode.leftChild!==null && deleteNode.rightChild!==null){
                parentNode.leftChild = deleteNode.rightChild;
                let node = parentNode.leftChild;
                while (node.leftChild !== null) {
                    node = node.leftChild;
                }
                node.leftChild = deleteNode.leftChild;
            }
        }else if (parentNode.rightChild !== null && searchData === parentNode.rightChild.data) {
            const deleteNode = parentNode.rightChild;
            
            // 자식 0개
            if (deleteNode.leftChild === null && deleteNode.rightChild === null) {
                parentNode.rightChild = null;
            }
            // 자식 1개
            else if (deleteNode.leftChild !== null && deleteNode.rightChild === null) {
                parentNode.rightChild = deleteNode.leftChild;
            }
            else if (deleteNode.leftChild === null && deleteNode.rightChild !== null) {
                parentNode.rightChild = deleteNode.rightChild;
            }
            // 자식 2개
            else if (deleteNode.leftChild !== null && deleteNode.rightChild !== null) {
            }
        }
        //parentNode의 자식중에서 deleteNode를 찾지못할때
        else{
            if(parentNode.leftChild!==null){
                this.deleteNode(searchData,parentNode.leftChild);
            }
            if(parentNode.rightChild!==null){
                this.deleteNode(searchData,parentNode.rightChild);
            }
        }        
    }
    // 삽입
}

const bt = new BinaryTree(4);
bt.pushLeft(4, 5);
bt.pushRight(4, 3);
bt.pushLeft(5, 1);
bt.pushLeft(3, 9);
bt.pushRight(9, 6);

bt.deleteNode(3);
bt.preOrder();

// bt.inOrder();
// bt.postOrder();

// // // 특별히 complete binary tree는 배열로 바꿔서 표현할 수 있다
// // // 즉, cbt1 = cbt2
// const cbt1 = new BinaryTree(4);
// cbt1.pushLeft(4, 5);
// cbt1.pushRight(4, 3);
// cbt1.pushLeft(5, 1);
// cbt1.pushLeft(5, 9);
// cbt1.pushLeft(3, 6);

// class CompleteBinaryTree {
//     treeList

//     constructor(...treeList) {
//         this.treeList = treeList
//     }

//     // 순회: 프리오더, 인오더, 포스트오더
//     preOrder(parentIndex) {
//         // 출력, 왼쪽재귀, 오른쪽재귀
//         if (this.treeList.length - 1 < parentIndex) {
//             return;
//         }

//         if (parentIndex === undefined) {
//             parentIndex = 0;
//         }
//         console.log(this.treeList[parentIndex]);
//         this.preOrder(parentIndex * 2 + 1)
//         this.preOrder(parentIndex * 2 + 2)
//     }
// }
// const cbt2 = new CompleteBinaryTree(4, 5, 3, 1, 9, 6)
// cbt2.preOrder()
