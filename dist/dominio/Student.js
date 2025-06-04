export class Student {
    id;
    name;
    adress;
    telephoneNumbers;
    constructor(id, name, adress, telephoneNumbers) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.telephoneNumbers = telephoneNumbers;
    }
    getid() {
        return this.id;
    }
    getname() {
        return this.name;
    }
    getadress() {
        return this.adress;
    }
    gettelephoneNumbers() {
        return this.telephoneNumbers;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
//# sourceMappingURL=Student.js.map