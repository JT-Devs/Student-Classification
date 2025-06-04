import type { Visitor } from "./visitor/Visitor.ts";
import { Student } from "./dominio/Student.ts";
import { Professor } from "./dominio/Professor.ts";

// DataValidationVisitor: implements Visitor with overloads
export class Client implements Visitor {
  visit(arg: Student | Professor): void {
    if (arg instanceof Student) {
      if (!arg.getid() || !arg.getname() || !arg.getadress() || arg.gettelephoneNumbers().length === 0) {
        console.log("❌ Estudiante con datos incompletos:");
      } else {
        console.log("✅ Estudiante válido:");
      }
      console.log(`Código: ${arg.getid()}`);
      console.log(`Nombre: ${arg.getname()}`);
      console.log(`Dirección: ${arg.getadress()}`);
      console.log(`Teléfonos: ${arg.gettelephoneNumbers().join(", ")}`);
    } else if (arg instanceof Professor) {
      if (!arg.getid() || !arg.getname() || !arg.getadress() || arg.gettelephoneNumbers().length === 0) {
        console.log("❌ Docente con datos incompletos:");
      } else if (arg.getid().length > 4) {
        console.log("❌ Docente con código inválido (máximo 4 dígitos):");
      } else {
        console.log("✅ Docente válido:");
      }
      console.log(`Código: ${arg.getid()}`);
      console.log(`Nombre: ${arg.getname()}`);
      console.log(`Dirección: ${arg.getadress()}`);
      console.log(`Teléfonos: ${arg.gettelephoneNumbers().join(", ")}`);
    }
  }
}