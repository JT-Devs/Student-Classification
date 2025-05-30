package visitor;

import dominio.Estudiante;
import dominio.Docente;

public interface Visitor {
    void visit(Estudiante estudiante);
    void visit(Docente docente);
}
