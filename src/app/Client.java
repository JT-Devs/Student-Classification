package app;

import coleccion.ColeccionEstudiantes;
import dominio.Estudiante;
import iterator.IteradorEstudiante;
import visitor.Element;
import visitor.Visitor;
import visitor.VisitorValidacionDatos;

import java.util.*;

public class Client {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ColeccionEstudiantes coleccion = new ColeccionEstudiantes();
        Visitor validador = new VisitorValidacionDatos();

        // Estudiantes precargados
        coleccion.agregarEstudiante(new Estudiante("001", "Carlos Gómez", "Calle 123", Arrays.asList("3001234567")));
        coleccion.agregarEstudiante(new Estudiante("002", "", "Calle 456", Arrays.asList("3017654321"))); // sin nombre
        coleccion.agregarEstudiante(new Estudiante("003", "Ana Ruiz", "", Arrays.asList())); // sin dirección ni
                                                                                             // teléfonos
        coleccion.agregarEstudiante(new Estudiante("004", "Luis Pérez", "Calle 789", Arrays.asList("3101112233")));

        boolean salir = false;

        while (!salir) {
            System.out.println("\n--- MENÚ PRINCIPAL ---");
            System.out.println("1. Ver estudiantes (validar datos)");
            System.out.println("2. Agregar estudiante");
            System.out.println("3. Salir");
            System.out.print("Seleccione una opción: ");
            String opcion = scanner.nextLine().trim();

            switch (opcion) {
                case "1":
                    System.out.print("Tipo de recorrido (lista/conjunto): ");
                    String tipo = scanner.nextLine().trim().toLowerCase();
                    if (!tipo.equals("lista") && !tipo.equals("conjunto")) {
                        System.out.println("\n***Tipo inválido. Se usará 'lista' por defecto.***\n");
                        tipo = "lista";
                    }

                    IteradorEstudiante iterador = coleccion.createIterator(tipo);
                    System.out.println("\nRecorriendo estudiantes por tipo: " + tipo.toUpperCase());
                    System.out.println("==========================================");

                    while (iterador.hasMore()) {
                        Element estudiante = iterador.getNext();
                        estudiante.accept(validador);
                        System.out.println("-----");
                    }
                    break;

                case "2":
                    System.out.println("Ingrese los datos del nuevo estudiante:");
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

                    // Validación de campos
                    if (codigo.isEmpty() || nombre.isEmpty() || direccion.isEmpty() || telefonos.isEmpty()) {
                        System.out.println(
                                "\n**No se puede agregar el estudiante. Todos los campos deben estar completos.**\n");
                    } else {
                        Estudiante nuevo = new Estudiante(codigo, nombre, direccion, telefonos);
                        coleccion.agregarEstudiante(nuevo);
                        System.out.println("\n****Estudiante agregado exitosamente.***\n");
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
