import { ArrayListIterator } from '@/iterator/ArrayListIterator.js';
import { ReverseArrayListIterator } from '@/iterator/ReverseArrayListIterator.js';
import { TreeSetIterator } from '@/iterator/TreeSetIterator.js';
import { ReverseTreeSetIterator } from '@/iterator/ReverseTreeSetIterator.js';
export class ElementCollection {
    list = [];
    set = new Set();
    addElement(element) {
        this.list.push(element);
        // Agrega solo si no existe ya en el Set (usando comparación por toString)
        for (const el of this.set) {
            if (el.toString() === element.toString())
                return;
        }
        this.set.add(element);
    }
    createIterator(type) {
        switch (type.toLowerCase()) {
            case 'list':
            case 'list-asc':
                return new ArrayListIterator(this.list);
            case 'list-desc':
                return new ReverseArrayListIterator(this.list);
            case 'set':
            case 'set-asc':
                return new TreeSetIterator(this.getSortedSet());
            case 'set-desc':
                return new ReverseTreeSetIterator(this.getSortedSet(true));
            default:
                console.log('⚠ Not recognized type. Ascending List will be used by default.');
                return new ArrayListIterator(this.list);
        }
    }
    // Método de apoyo para ordenar el Set como un TreeSet
    getSortedSet(descending = false) {
        return Array.from(this.set).sort((a, b) => {
            const result = a.toString().localeCompare(b.toString());
            return descending ? -result : result;
        });
    }
}
//# sourceMappingURL=ElementCollection.js.map