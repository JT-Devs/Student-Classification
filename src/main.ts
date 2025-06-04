import { Client } from './Client.ts';
import { Student } from "./dominio/Student.ts";
import { Professor } from "./dominio/Professor.ts";
import type { Visitor } from './visitor/Visitor.ts';
import { ElementCollection } from './collection/ElementCollection.ts';

class Main {
  public static run(): void {
    const colection = new ElementCollection();
    const validador: Visitor = new Client();

    // Preloaded students and professors
    colection.addElement(new Student('001', 'Carlos Gómez', 'Calle 123', ['3001234567']));
    colection.addElement(new Student('002', '', 'Calle 456', ['3017654321']));
    colection.addElement(new Student('003', 'Ana Ruiz', '', []));
    colection.addElement(new Student('004', 'Luis Pérez', 'Calle 789', ['3101112233']));
    colection.addElement(new Professor('5678', 'Prof. Ramírez', 'Cra 45', ['3129876543']));
    colection.addElement(new Professor('12345', 'Prof. López', 'Calle 789', ['3112223344']));

    let salir = false;

    // HTML prompt/alert-based simulation for browser
    while (!salir) {
      alert('[✔ Sistema listo: puede registrar y validar estudiantes o docentes]\n\n--- MENÚ PRINCIPAL ---\n1. Ver estudiantes y docentes (validar datos)\n2. Agregar estudiante o docente\n3. Salir');
      const opcion = prompt('Seleccione una opción:')?.trim() || '';

      switch (opcion) {
        case '1': {
          alert('Seleccione el tipo de recorrido:\n1. Lista ascendente\n2. Lista descendente\n3. Conjunto ascendente\n4. Conjunto descendente');
          const opcionRecorrido = prompt('Opción (1-4):')?.trim() || '';
          let tipo: string;
          switch (opcionRecorrido) {
            case '1':
              tipo = 'list-asc';
              break;
            case '2':
              tipo = 'list-desc';
              break;
            case '3':
              tipo = 'set-asc';
              break;
            case '4':
              tipo = 'set-desc';
              break;
            default:
              alert('⚠ Opción inválida. Se usará "list-asc" por defecto.');
              tipo = 'list-asc';
          }
          const iterador = colection.createIterator(tipo);
          let output = '\nRecorriendo registros por tipo: ' + tipo.toUpperCase() + '\n==========================================\n';
          while (iterador.hasNext()) {
            const persona = iterador.getNext();
            if (persona) {
              // Collect output from visitor
              // @ts-ignore
              output += persona.accept(validador) + '\n-----\n';
            }
          }
          alert(output);
          break;
        }
        case '2': {
          const tipoPersona = prompt('¿Qué desea agregar? (estudiante/docente):')?.trim().toLowerCase() || '';
          alert('Ingrese los datos:');
          const codigo = prompt('Código:') || '';
          const nombre = prompt('Nombre:') || '';
          const direccion = prompt('Dirección:') || '';
          const telefonos: string[] = [];
          let cantidad: number;
          try {
            cantidad = parseInt(prompt('¿Cuántos teléfonos desea ingresar?') || '0');
          } catch {
            cantidad = 0;
          }
          for (let i = 1; i <= cantidad; i++) {
            const telefono = prompt(`Teléfono #${i}:`) || '';
            if (telefono.trim() !== '') {
              telefonos.push(telefono);
            }
          }
          if (!codigo || !nombre || !direccion || telefonos.length === 0) {
            alert('❌ Todos los campos deben estar completos.');
            break;
          }
          if (tipoPersona === 'estudiante') {
            colection.addElement(new Student(codigo, nombre, direccion, telefonos));
            alert('✅ Estudiante agregado.');
          } else if (tipoPersona === 'docente') {
            if (codigo.length > 4) {
              alert('❌ No se puede registrar el docente. El código debe tener máximo 4 dígitos.');
              break;
            }
            colection.addElement(new Professor(codigo, nombre, direccion, telefonos));
            alert('✅ Docente agregado.');
          } else {
            alert('❌ Tipo de persona no reconocido.');
          }
          break;
        }
        case '3':
          salir = true;
          alert('\nPrograma finalizado.');
          break;
        default:
          alert('Opción inválida. Intente nuevamente.');
      }
    }
  }
}

Main.run();