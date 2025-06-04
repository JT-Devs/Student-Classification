import { Client } from './Client.js';
import { Student } from "./dominio/Student.js";
import { Professor } from "./dominio/Professor.js";
import { ElementCollection } from './collection/ElementCollection.js';
// @ts-ignore
import readlineSync from 'readlineSync-sync';
class Main {
    static run() {
        const colection = new ElementCollection();
        const validador = new Client();
        // Preloaded students and professors
        colection.addElement(new Student('001', 'Carlos Gómez', 'Calle 123', ['3001234567']));
        colection.addElement(new Student('002', '', 'Calle 456', ['3017654321']));
        colection.addElement(new Student('003', 'Ana Ruiz', '', []));
        colection.addElement(new Student('004', 'Luis Pérez', 'Calle 789', ['3101112233']));
        colection.addElement(new Professor('5678', 'Prof. Ramírez', 'Cra 45', ['3129876543']));
        colection.addElement(new Professor('12345', 'Prof. López', 'Calle 789', ['3112223344']));
        let salir = false;
        while (!salir) {
            console.log('\n[✔ Sistema listo: puede registrar y validar estudiantes o docentes]');
            console.log('\n--- MENÚ PRINCIPAL ---');
            console.log('1. Ver estudiantes y docentes (validar datos)');
            console.log('2. Agregar estudiante o docente');
            console.log('3. Salir');
            const opcion = readlineSync.question('Seleccione una opción: ').trim();
            switch (opcion) {
                case '1':
                    console.log('\nSeleccione el tipo de recorrido:');
                    console.log('1. Lista ascendente');
                    console.log('2. Lista descendente');
                    console.log('3. Conjunto ascendente');
                    console.log('4. Conjunto descendente');
                    const opcionRecorrido = readlineSync.question('Opción (1-4): ').trim();
                    let tipo;
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
                            console.log('⚠ Opción inválida. Se usará "list-asc" por defecto.');
                            tipo = 'list-asc';
                    }
                    const iterador = colection.createIterator(tipo);
                    console.log('\nRecorriendo registros por tipo: ' + tipo.toUpperCase());
                    console.log('==========================================');
                    while (iterador.hasNext()) {
                        const persona = iterador.getNext();
                        if (persona)
                            persona.accept(validador);
                        console.log('-----');
                    }
                    break;
                case '2':
                    const tipoPersona = readlineSync.question('¿Qué desea agregar? (estudiante/docente): ').trim().toLowerCase();
                    console.log('Ingrese los datos:');
                    const codigo = readlineSync.question('Código: ');
                    const nombre = readlineSync.question('Nombre: ');
                    const direccion = readlineSync.question('Dirección: ');
                    const telefonos = [];
                    let cantidad;
                    try {
                        cantidad = parseInt(readlineSync.question('¿Cuántos teléfonos desea ingresar? '));
                    }
                    catch {
                        cantidad = 0;
                    }
                    for (let i = 1; i <= cantidad; i++) {
                        const telefono = readlineSync.question(`Teléfono #${i}: `);
                        if (telefono.trim() !== '') {
                            telefonos.push(telefono);
                        }
                    }
                    if (!codigo || !nombre || !direccion || telefonos.length === 0) {
                        console.log('❌ Todos los campos deben estar completos.');
                        break;
                    }
                    if (tipoPersona === 'estudiante') {
                        colection.addElement(new Student(codigo, nombre, direccion, telefonos));
                        console.log('✅ Estudiante agregado.');
                    }
                    else if (tipoPersona === 'docente') {
                        if (codigo.length > 4) {
                            console.log('❌ No se puede registrar el docente. El código debe tener máximo 4 dígitos.');
                            break;
                        }
                        colection.addElement(new Professor(codigo, nombre, direccion, telefonos));
                        console.log('✅ Docente agregado.');
                    }
                    else {
                        console.log('❌ Tipo de persona no reconocido.');
                    }
                    break;
                case '3':
                    salir = true;
                    console.log('\nPrograma finalizado.');
                    break;
                default:
                    console.log('Opción inválida. Intente nuevamente.');
            }
        }
    }
}
Main.run();
//# sourceMappingURL=Main.js.map