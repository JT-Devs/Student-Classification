import type {Element} from '@/visitor/Element.js';

export interface Iterator {
  hasNext(): boolean ;
  getNext(): Element | null;
}