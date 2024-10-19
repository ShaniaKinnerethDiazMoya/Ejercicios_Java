import java.util.Arrays;

public class OrdenarCadena {
    public static void main(String[] args) {
        String cadena = "programacion";
        char[] caracteres = cadena.toCharArray();
        Arrays.sort(caracteres);
        String cadenaOrdenada = new String(caracteres);
        System.out.println("La cadena ordenada alfabéticamente es: " + cadenaOrdenada);
    }
}
