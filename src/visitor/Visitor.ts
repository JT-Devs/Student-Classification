import type {Professor} from '@/dominio/Professor.js';
import type {Student} from '@/dominio/Student.js';

export interface Visitor {
  visit(student: Student) : void;
  visit(professor: Professor): void;
}