class Queue {
    list;
    length;

    constructor() {
        this.list = [];
        this.length = 0;
    }

    enqueue(item) {
        this.list.push(item);
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
