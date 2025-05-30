package iterator;

import java.util.Iterator;
import java.util.TreeSet;
import visitor.Element;

public class IteratorTreeSet implements IteradorEstudiante {
    private Iterator<Element> iterator;

    public IteratorTreeSet(TreeSet<Element> collection) {
        this.iterator = collection.iterator();
    }

    @Override
    public boolean hasMore() {
        return iterator.hasNext();
    }

    @Override
    public Element getNext() {
        if (!hasMore()) {
            return null;
        }
        return iterator.next();
    }
}
