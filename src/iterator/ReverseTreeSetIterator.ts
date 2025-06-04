import type { Iterator } from './Iterator.ts';
import type { Element } from '@/visitor/Element.ts';

export class ReverseTreeSetIterator implements Iterator {
  private collection: Element[];
  private index = 0;

  constructor(elements: Element[]){
    this.collection = elements;
    this.index = this.collection.length - 1;
  }

  hasNext(): boolean {
    return this.index >= 0;
  }

  getNext(): Element | null {
    return (
      !this.hasNext() ?
      null :
      this.collection[this.index--]
    );
  }

}