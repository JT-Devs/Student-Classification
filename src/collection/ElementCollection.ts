import type { IterableColection } from '@/iterator/IterableColection.ts';
import type { Element } from '@/visitor/Element.ts';
import type { Iterator } from '@/iterator/Iterator.ts';
import { ArrayListIterator } from '@/iterator/ArrayListIterator.ts';
import { ReverseArrayListIterator } from '@/iterator/ReverseArrayListIterator.ts';
import { TreeSetIterator } from '@/iterator/TreeSetIterator.ts';
import { ReverseTreeSetIterator } from '@/iterator/ReverseTreeSetIterator.ts';


export class ElementCollection implements IterableColection {
  private list: Array<Element> = [];
  private set: Set<Element> = new Set();

  public addElement(element: Element): void {
    this.list.push(element);

    // Agrega solo si no existe ya en el Set (usando comparación por toString)
    for (const el of this.set) {
      if (el.toString() === element.toString()) return;
    }
    this.set.add(element);
  }

  public createIterator(type: string): Iterator {
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
  private getSortedSet(descending = false): Element[] {
    return Array.from(this.set).sort((a, b) => {
      const result = a.toString().localeCompare(b.toString());
      return descending ? -result : result;
    });
  }
}