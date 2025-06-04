import type { Visitor } from './Visitor.ts';

export interface Element{
  accept(visitor: Visitor): void;
}