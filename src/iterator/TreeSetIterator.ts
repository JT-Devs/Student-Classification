import type { Iterator } from './Iterator.ts';
import type { Element } from '@/visitor/Element.ts';

export class TreeSetIterator implements Iterator {
  private collection: Element[];
  private index = 0;

  constructor(elements: Element[]) {
    this.collection = elements;
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }

  getNext(): Element | null {
    return (
      !this.hasNext() ?
      null :
      this.collection[this.index++]
    );
  }

}