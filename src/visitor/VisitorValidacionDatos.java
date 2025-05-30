package visitor;

import dominio.Estudiante;
import dominio.Docente;

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

    @Override
    public void visit(Docente docente) {
        boolean datosIncompletos = false;

        if (docente.getCodigo() == null || docente.getCodigo().isEmpty()) {
            System.out.println("⚠ Docente sin código.");
            datosIncompletos = true;
        }
        if (docente.getNombre() == null || docente.getNombre().isEmpty()) {
            System.out.println("⚠ Docente sin nombre.");
            datosIncompletos = true;
        }
        if (docente.getDireccion() == null || docente.getDireccion().isEmpty()) {
            System.out.println("⚠ Docente sin dirección.");
            datosIncompletos = true;
        }
        if (docente.getTelefonos() == null || docente.getTelefonos().isEmpty()) {
            System.out.println("⚠ Docente sin teléfonos.");
            datosIncompletos = true;
        }

        // Validar longitud del código
        if (docente.getCodigo() != null && docente.getCodigo().length() > 4) {
            System.out.println("⚠ Código de docente excede 4 dígitos.");
            datosIncompletos = true;
        }

        if (!datosIncompletos) {
            System.out.println("✅ Docente " + docente.getNombre() + " tiene sus datos completos y código válido.");
        }
    }
}
