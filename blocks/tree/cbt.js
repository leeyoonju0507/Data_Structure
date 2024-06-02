class CompleteBinaryTree {
    treeList

    constructor(rootData) {
        this.treeList = [null, rootData];
    }

    push(data) {
        this.treeList.push(data);
    }

    // 순회: 프리오더, 인오더, 포스트오더
    preOrder(parentIndex) {
        // 출력, 왼쪽재귀, 오른쪽재귀
        if (this.treeList.length - 1 < parentIndex) {
            return;
        }

        if (parentIndex === undefined) {
            parentIndex = 1;
        }
        console.log(this.treeList[parentIndex]);
        this.preOrder(parentIndex * 2)
        this.preOrder(parentIndex * 2 + 1)
    }

    findNode(searchData, parentIndex = undefined) {
        if (parentIndex === undefined) {
            parentIndex = 1;
        }

        if (searchData === this.treeList[parentIndex]) {
            return this.treeList[parentIndex];
        }

        if (parentIndex * 2 < this.treeList.length) {
            const leftResult = this.findNode(searchData, parentIndex * 2);
            if (leftResult !== null) {
                return leftResult;
            }
        }

        if (parentIndex * 2 + 1 < this.treeList.length) {
            const rightResult = this.findNode(searchData, parentIndex * 2 + 1);
            if (rightResult !== null) {
                return rightResult;
            }
        }

        return null;
    }
}

const cbt = new CompleteBinaryTree(4);
cbt.push(3);
cbt.push(1);
cbt.push(9);
cbt.push(6);
cbt.push(2);
cbt.preOrder();
