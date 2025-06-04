import { Student } from '@/dominio/Student.js';
import { Professor } from '@/dominio/Professor.js';
export class DataValidationVisitor {
    visit(arg) {
        if (arg instanceof Student) {
            let incomplete = false;
            if (!arg.getid()) {
                console.log("⚠ Student missing id.");
                incomplete = true;
            }
            if (!arg.getname()) {
                console.log("⚠ Student missing name.");
                incomplete = true;
            }
            if (!arg.getadress()) {
                console.log("⚠ Student missing address.");
                incomplete = true;
            }
            if (!arg.gettelephoneNumbers() || arg.gettelephoneNumbers().length === 0) {
                console.log("⚠ Student missing phone numbers.");
                incomplete = true;
            }
            if (!incomplete) {
                console.log(`✅ Student ${arg.getname()} has all data complete.`);
            }
        }
        else if (arg instanceof Professor) {
            let incomplete = false;
            if (!arg.getid()) {
                console.log("⚠ Professor missing id.");
                incomplete = true;
            }
            if (!arg.getname()) {
                console.log("⚠ Professor missing name.");
                incomplete = true;
            }
            if (!arg.getadress()) {
                console.log("⚠ Professor missing address.");
                incomplete = true;
            }
            if (!arg.gettelephoneNumbers() || arg.gettelephoneNumbers().length === 0) {
                console.log("⚠ Professor missing phone numbers.");
                incomplete = true;
            }
            if (arg.getid() && arg.getid().length > 4) {
                console.log("⚠ Professor id exceeds 4 digits.");
                incomplete = true;
            }
            if (!incomplete) {
                console.log(`✅ Professor ${arg.getname()} has all data complete and valid id.`);
            }
        }
    }
}
//# sourceMappingURL=DataValidationVisitor.js.map