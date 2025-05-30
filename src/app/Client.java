package app;

import coleccion.ColeccionElementos;
import dominio.Docente;
import dominio.Estudiante;
import iterator.Iterador;
import visitor.Element;
import visitor.Visitor;
import visitor.VisitorValidacionDatos;

import java.util.*;

public class Client {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ColeccionElementos coleccion = new ColeccionElementos();
        Visitor validador = new VisitorValidacionDatos();

        // Estudiantes y docentes precargados
        coleccion.agregarElemento(new Estudiante("001", "Carlos Gómez", "Calle 123", Arrays.asList("3001234567")));
        coleccion.agregarElemento(new Estudiante("002", "", "Calle 456", Arrays.asList("3017654321")));
        coleccion.agregarElemento(new Estudiante("003", "Ana Ruiz", "", Arrays.asList()));
        coleccion.agregarElemento(new Estudiante("004", "Luis Pérez", "Calle 789", Arrays.asList("3101112233")));
        coleccion.agregarElemento(new Docente("5678", "Prof. Ramírez", "Cra 45", Arrays.asList("3129876543")));
        coleccion.agregarElemento(new Docente("12345", "Prof. López", "Calle 789", Arrays.asList("3112223344")));

        boolean salir = false;

        while (!salir) {
            System.out.println("\n[✔ Sistema listo: puede registrar y validar estudiantes o docentes]");
            System.out.println("\n--- MENÚ PRINCIPAL ---");
            System.out.println("1. Ver estudiantes y docentes (validar datos)");
            System.out.println("2. Agregar estudiante o docente");
            System.out.println("3. Salir");
            System.out.print("Seleccione una opción: ");
            String opcion = scanner.nextLine().trim();

            switch (opcion) {
                case "1":
                    System.out.println("\nSeleccione el tipo de recorrido:");
                    System.out.println("1. Lista ascendente");
                    System.out.println("2. Lista descendente");
                    System.out.println("3. Conjunto ascendente");
                    System.out.println("4. Conjunto descendente");
                    System.out.print("Opción (1-4): ");
                    String opcionRecorrido = scanner.nextLine().trim();

                    String tipo;
                    switch (opcionRecorrido) {
                        case "1":
                            tipo = "lista-asc";
                            break;
                        case "2":
                            tipo = "lista-desc";
                            break;
                        case "3":
                            tipo = "conjunto-asc";
                            break;
                        case "4":
                            tipo = "conjunto-desc";
                            break;
                        default:
                            System.out.println("⚠ Opción inválida. Se usará 'lista-asc' por defecto.");
                            tipo = "lista-asc";
                    }

                    Iterador iterador = coleccion.createIterator(tipo);
                    System.out.println("\nRecorriendo registros por tipo: " + tipo.toUpperCase());
                    System.out.println("==========================================");

                    while (iterador.hasMore()) {
                        Element persona = iterador.getNext();
                        persona.accept(validador);
                        System.out.println("-----");
                    }
                    break;

                case "2":
                    System.out.println("¿Qué desea agregar? (estudiante/docente): ");
                    String tipoPersona = scanner.nextLine().trim().toLowerCase();

                    System.out.println("Ingrese los datos:");

                    System.out.print("Código: ");
                    String codigo = scanner.nextLine();

                    System.out.print("Nombre: ");
                    String nombre = scanner.nextLine();

                    System.out.print("Dirección: ");
                    String direccion = scanner.nextLine();

                    List<String> telefonos = new ArrayList<>();
                    System.out.print("¿Cuántos teléfonos desea ingresar? ");
                    int cantidad;
                    try {
                        cantidad = Integer.parseInt(scanner.nextLine());
                    } catch (NumberFormatException e) {
                        cantidad = 0;
                    }

                    for (int i = 1; i <= cantidad; i++) {
                        System.out.print("Teléfono #" + i + ": ");
                        String telefono = scanner.nextLine();
                        if (!telefono.trim().isEmpty()) {
                            telefonos.add(telefono);
                        }
                    }

                    if (codigo.isEmpty() || nombre.isEmpty() || direccion.isEmpty() || telefonos.isEmpty()) {
                        System.out.println("❌ Todos los campos deben estar completos.");
                        break;
                    }

                    if (tipoPersona.equals("estudiante")) {
                        coleccion.agregarElemento(new Estudiante(codigo, nombre, direccion, telefonos));
                        System.out.println("✅ Estudiante agregado.");
                    } else if (tipoPersona.equals("docente")) {
                        if (codigo.length() > 4) {
                            System.out.println(
                                    "❌ No se puede registrar el docente. El código debe tener máximo 4 dígitos.");
                            break;
                        }
                        coleccion.agregarElemento(new Docente(codigo, nombre, direccion, telefonos));
                        System.out.println("✅ Docente agregado.");
                    } else {
                        System.out.println("❌ Tipo de persona no reconocido.");
                    }
                    break;

                case "3":
                    salir = true;
                    System.out.println("\nPrograma finalizado.");
                    break;

                default:
                    System.out.println("Opción inválida. Intente nuevamente.");
            }
        }

        scanner.close();
    }
}
