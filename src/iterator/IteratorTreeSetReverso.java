package iterator;

import java.util.Iterator;
import java.util.TreeSet;
import visitor.Element;

public class IteratorTreeSetReverso implements Iterador {
    private TreeSet<Element> collection;
    private java.util.Iterator<Element> iterator;

    public IteratorTreeSetReverso(TreeSet<Element> collection) {
        this.collection = collection;
        this.iterator = collection.descendingIterator(); // Java lo provee directamente
    }

    @Override
    public boolean hasMore() {
        return iterator.hasNext();
    }

    @Override
    public Element getNext() {
        return iterator.next();
    }
}
