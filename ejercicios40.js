import java.util.Scanner;

public class PerimetroCirculo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingresa el radio del círculo: ");
        double radio = scanner.nextDouble();
        double perimetro = 2 * Math.PI * radio;
        System.out.println("El perímetro del círculo es: " + perimetro);
    }
}
