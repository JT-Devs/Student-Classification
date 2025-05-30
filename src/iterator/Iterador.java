package iterator;

import visitor.Element;

public interface Iterador {
    boolean hasMore();
    Element getNext();
}
