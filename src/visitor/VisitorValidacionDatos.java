package visitor;

import dominio.Estudiante;

public class VisitorValidacionDatos implements Visitor {

    @Override
    public void visit(Estudiante estudiante) {
        boolean datosIncompletos = false;

        if (estudiante.getCodigo() == null || estudiante.getCodigo().isEmpty()) {
            System.out.println("⚠ Estudiante sin código.");
            datosIncompletos = true;
        }
        if (estudiante.getNombre() == null || estudiante.getNombre().isEmpty()) {
            System.out.println("⚠ Estudiante sin nombre.");
            datosIncompletos = true;
        }
        if (estudiante.getDireccion() == null || estudiante.getDireccion().isEmpty()) {
            System.out.println("⚠ Estudiante sin dirección.");
            datosIncompletos = true;
        }
        if (estudiante.getTelefonos() == null || estudiante.getTelefonos().isEmpty()) {
            System.out.println("⚠ Estudiante sin teléfonos.");
            datosIncompletos = true;
        }

        if (!datosIncompletos) {
            System.out.println("✅ Estudiante " + estudiante.getNombre() + " tiene sus datos completos.");
        }
    }
}
