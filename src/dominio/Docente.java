package dominio;

import java.util.List;
import visitor.Element;
import visitor.Visitor;

public class Docente implements Element {
    private String codigo;
    private String nombre;
    private String direccion;
    private List<String> telefonos;

    public Docente(String codigo, String nombre, String direccion, List<String> telefonos) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefonos = telefonos;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public List<String> getTelefonos() {
        return telefonos;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}
