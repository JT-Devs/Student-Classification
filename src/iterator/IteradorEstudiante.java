package iterator;

import visitor.Element;

public interface IteradorEstudiante {
    boolean hasMore();
    Element getNext();
}
