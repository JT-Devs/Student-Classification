package iterator;

import java.util.ArrayList;
import visitor.Element;

public class IteratorArrayList implements IteradorEstudiante {
    private ArrayList<Element> collection;
    private int index = 0;

    public IteratorArrayList(ArrayList<Element> collection) {
        this.collection = collection;
    }

    @Override
    public boolean hasMore() {
        return index < collection.size();
    }

    @Override
    public Element getNext() {
        if (!hasMore()) {
            return null;
        }
        return collection.get(index++);
    }
}
