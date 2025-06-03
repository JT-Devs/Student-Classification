import type {Iterator} from './Iterator'

export interface IterableColection {
  createIterator(tipo: string): Iterator ;
}