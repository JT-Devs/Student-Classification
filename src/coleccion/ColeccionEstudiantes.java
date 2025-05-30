package coleccion;

import java.util.ArrayList;
import java.util.TreeSet;

import visitor.Element;
import iterator.IteradorEstudiante;
import iterator.IterableColeccion;
import iterator.IteratorArrayList;
import iterator.IteratorTreeSet;

public class ColeccionEstudiantes implements IterableColeccion {

    private ArrayList<Element> listaEstudiantes = new ArrayList<>();
    private TreeSet<Element> conjuntoEstudiantes = new TreeSet<>(
        (e1, e2) -> e1.toString().compareTo(e2.toString()) // Comparador por defecto, se puede ajustar
    );

    public void agregarEstudiante(Element estudiante) {
        listaEstudiantes.add(estudiante);
        conjuntoEstudiantes.add(estudiante);
    }

    @Override
    public IteradorEstudiante createIterator(String tipo) {
        if (tipo.equalsIgnoreCase("lista")) {
            return new IteratorArrayList(listaEstudiantes);
        } else if (tipo.equalsIgnoreCase("conjunto")) {
            return new IteratorTreeSet(conjuntoEstudiantes);
        } else {
            throw new IllegalArgumentException("Tipo de recorrido no válido: " + tipo);
        }
    }
}
