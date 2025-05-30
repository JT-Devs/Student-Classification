package coleccion;

import java.util.ArrayList;
import java.util.TreeSet;

import visitor.Element;
import iterator.Iterador;
import iterator.IterableColeccion;
import iterator.IteratorArrayList;
import iterator.IteratorArrayListReverso;
import iterator.IteratorTreeSet;
import iterator.IteratorTreeSetReverso;

public class ColeccionElementos implements IterableColeccion {

    private ArrayList<Element> lista = new ArrayList<>();
    private TreeSet<Element> conjunto = new TreeSet<>(
        (e1, e2) -> e1.toString().compareTo(e2.toString()) // Comparador por defecto
    );

    public void agregarElemento(Element elemento) {
        lista.add(elemento);
        conjunto.add(elemento);
    }

    @Override
    public Iterador createIterator(String tipo) {
        switch (tipo.toLowerCase()) {
            case "lista":
            case "lista-asc":
                return new IteratorArrayList(lista);
            case "lista-desc":
                return new IteratorArrayListReverso(lista);
            case "conjunto":
            case "conjunto-asc":
                return new IteratorTreeSet(conjunto);
            case "conjunto-desc":
                return new IteratorTreeSetReverso(conjunto);
            default:
                System.out.println("⚠ Tipo no reconocido. Se usará lista ascendente por defecto.");
                return new IteratorArrayList(lista);
        }
    }
}
