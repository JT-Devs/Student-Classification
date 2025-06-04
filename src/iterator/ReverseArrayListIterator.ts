import type { Iterator } from './Iterator.ts';
import type { Element } from '@/visitor/Element.ts'

export class ReverseArrayListIterator implements Iterator {
  private collection: Array<Element>;
  private index: number;
  
  constructor(collection: Array<Element>) {
    this.collection = collection;
    this.index = collection.length - 1; // comienza desde el final
  }

  public hasNext(): boolean { 
    return this.index >= 0;
  }

  public getNext(): Element | null {
    return(
      !this.hasNext ?
      null : 
      this.collection[this.index--]
    );
  }
}