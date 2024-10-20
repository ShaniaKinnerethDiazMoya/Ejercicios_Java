import java.util.Scanner;

public class ReemplazarCaracteres {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Introduce una cadena: ");
        String cadena = sc.nextLine();
        
        System.out.print("Introduce el carácter a reemplazar: ");
        char antiguoChar = sc.next().charAt(0);
        
        System.out.print("Introduce el carácter nuevo: ");
        char nuevoChar = sc.next().charAt(0);
        
        String cadenaReemplazada = cadena.replace(antiguoChar, nuevoChar);
        
        System.out.println("Cadena resultante: " + cadenaReemplazada);
    }
}
