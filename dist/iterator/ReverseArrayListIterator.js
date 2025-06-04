export class ReverseArrayListIterator {
    collection;
    index;
    constructor(collection) {
        this.collection = collection;
        this.index = collection.length - 1; // comienza desde el final
    }
    hasNext() {
        return this.index >= 0;
    }
    getNext() {
        return (!this.hasNext ?
            null :
            this.collection[this.index--]);
    }
}
//# sourceMappingURL=ReverseArrayListIterator.js.map