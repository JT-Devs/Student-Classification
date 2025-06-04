export class ArrayListIterator {
    collection;
    index = 0;
    constructor(collection) {
        this.collection = collection;
    }
    hasNext() {
        return this.index < this.collection.length;
    }
    getNext() {
        if (!this.hasNext()) {
            return null;
        }
        return this.collection[this.index++];
    }
}
//# sourceMappingURL=ArrayListIterator.js.map