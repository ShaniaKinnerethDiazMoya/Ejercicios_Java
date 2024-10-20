import java.util.Scanner;

public class ValorAbsoluto {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Introduce un número: ");
        int numero = sc.nextInt();
        
        int valorAbsoluto = Math.abs(numero);
        
        System.out.println("El valor absoluto de " + numero + " es " + valorAbsoluto);
    }
}
