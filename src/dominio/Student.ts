import type {Element} from '@/visitor/Element';
import type { Visitor } from '@/visitor/Visitor';

export class Student implements Element {
  private id: string;
  private name: string;
  private adress: string;
  private telephoneNumbers: string[];

  constructor(id: string, name: string, adress: string, telephoneNumbers: string[]) {
    this.id = id;
    this.name = name;
    this.adress = adress;
    this.telephoneNumbers = telephoneNumbers;
  }

  public getid(): string {
    return this.id;
  }

  public getname(): string {
    return this.name;
  }

  public getadress(): string {
    return this.adress;
  }

  public gettelephoneNumbers(): string[] {
    return this.telephoneNumbers;
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}