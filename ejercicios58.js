import java.util.Arrays;
import java.util.Scanner;

public class OrdenarCadena {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Introduce una cadena: ");
        String cadena = sc.nextLine();
        
        char[] caracteres = cadena.toCharArray();
        Arrays.sort(caracteres);
        
        String cadenaOrdenada = new String(caracteres);
        
        System.out.println("Cadena ordenada alfabéticamente: " + cadenaOrdenada);
    }
}
