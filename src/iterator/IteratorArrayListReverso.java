package iterator;

import visitor.Element;
import java.util.ArrayList;

public class IteratorArrayListReverso implements Iterador {
    private ArrayList<Element> collection;
    private int index;

    public IteratorArrayListReverso(ArrayList<Element> collection) {
        this.collection = collection;
        this.index = collection.size() - 1; // comienza desde el final
    }

    @Override
    public boolean hasMore() {
        return index >= 0;
    }

    @Override
    public Element getNext() {
        return collection.get(index--);
    }
}
