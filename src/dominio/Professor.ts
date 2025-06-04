import type {Element} from '@/visitor/Element.ts';
import type { Visitor } from '@/visitor/Visitor.ts';

export class Professor implements Element {

  private id: string;
  private name: string;
  private adress: string;
  private telephoneNumbers: Array<string>;

  constructor(id: string, name: string, adress: string, telephoneNumbers: Array<string>) {
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

  public gettelephoneNumbers(): Array<string> {
    return this.telephoneNumbers;
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
  
}