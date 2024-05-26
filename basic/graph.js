// 큐
class Queue {
    list;
    length;

    constructor() {
        this.list = [];
        this.length = 0;
    }

    enqueue(item) {
        this.list.push(item)
        this.length += 1;
    }

    dequeue() {
        if (this.list.length <= 0) {
            return null;
        }
        this.length -= 1;
        return this.list.shift();
    }
}

// 그래프

// 1. 사용
// 연결관계가 있는 데이터

// 2. 용어 정리
// 노드 엣지 경로 인접 거리 싸이클 차수

// 3. 종류
// 무방향 그래프, 방향 그래프, 가중치 그래프

// 순회
// dfs, bfs
const inf = 1e9

// 우선 그래프를 만들어야 뭐라도 한다
// 1. 모든 노드를 배열에 넣으면 => 노드를 인덱스, 숫자로 생각할 수 있다
// => 1-1. 엣지 정보를 인접 행렬 방식으로 만들기
// => 1-2. 엣지 정보를 인접 리스트 방식으로 만들기
const matrixGraph = [
    [null, null, null, null, null],
    [null, 0, 1, 1, inf],
    [null, 1, 0, 1, inf],
    [null, 1, 1, 0, 1],
    [null, inf, inf, 1, 0],
]
const matrixDfs = (graph, visited, currentNode) => {
    visited[currentNode] = true;
    console.log(`${currentNode}를 방문했다!`);
    for (let i = 1; i < graph[currentNode].length; i++) {
        const edge = graph[currentNode][i];
        if (edge === 0 || edge === inf) {
            continue;
        }

        if (visited[i] === true) {
            continue;
        }

        matrixDfs(graph, visited, i);
    }
}
const matrixBfs = (graph, visited, startNode) => {
    const queue = new Queue();
    queue.enqueue(startNode);
    visited[startNode] = true;
    console.log(startNode + "를 방문했어요");

    while (queue.length > 0) {
        const currentNode = queue.dequeue();
        for (let neighborNode = 1; neighborNode < graph[currentNode].length; neighborNode++) {
            const edge = graph[currentNode][neighborNode];
            if (edge === 0 || edge === inf) {
                continue;
            }
            if (visited[neighborNode] === true) {
                continue;
            }

            queue.enqueue(neighborNode);
            visited[neighborNode] = true;
            console.log(neighborNode + "를 방문했어요");
        }
    }
}

const visited1 = [null, false, false, false, false];
matrixDfs(matrixGraph, visited1, 1);

console.log("-----");

const visited2 = [null, false, false, false, false];
matrixBfs(matrixGraph, visited2, 1);

// 1-2. 모든 노드를 배열에 넣으면 => 노드를 인덱스, 숫자로 생각할 수 있다
// => 엣지 정보를 인접 리스트 방식으로 만들기
const listGraph = [
    null,
    [2, 3],
    [1, 3],
    [1, 2, 4],
    [3]
]
