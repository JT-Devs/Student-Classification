export class ReverseTreeSetIterator {
    collection;
    index = 0;
    constructor(elements) {
        this.collection = elements;
        this.index = this.collection.length - 1;
    }
    hasNext() {
        return this.index >= 0;
    }
    getNext() {
        return (!this.hasNext() ?
            null :
            this.collection[this.index--]);
    }
}
//# sourceMappingURL=ReverseTreeSetIterator.js.map