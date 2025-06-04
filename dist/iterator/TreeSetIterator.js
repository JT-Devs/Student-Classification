export class TreeSetIterator {
    collection;
    index = 0;
    constructor(elements) {
        this.collection = elements;
    }
    hasNext() {
        return this.index < this.collection.length;
    }
    getNext() {
        return (!this.hasNext() ?
            null :
            this.collection[this.index++]);
    }
}
//# sourceMappingURL=TreeSetIterator.js.map