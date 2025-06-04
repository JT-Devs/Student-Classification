import type { Iterator } from './Iterator.ts';
import type { Element } from '@/visitor/Element.ts';

export class ArrayListIterator implements Iterator {

  private collection: Array<Element>;
  private index: number = 0;

  constructor(collection: Array<Element>) {
    this.collection = collection;
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }

  getNext(): Element | null {
    if (!this.hasNext()) {
      return null;
    }
    return this.collection[this.index++];
  }
  
}