import type { Iterator } from './Iterator.ts';

export interface IterableColection {
  createIterator(tipo: string): Iterator ;
}