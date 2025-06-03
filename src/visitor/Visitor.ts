import {Professor} from '@/dominio/Professor';
import {Student} from '@/dominio/Student';

export interface Visitor {
  visit(student: Student) : void;
  visit(professor: Professor): void;
}