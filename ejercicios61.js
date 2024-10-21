import java.util.Arrays;

public class Mediana {
    public static double encontrarMediana(int[] numeros) {
        Arrays.sort(numeros);
        int n = numeros.length;
        if (n % 2 == 0) {
            return (numeros[n / 2 - 1] + numeros[n / 2]) / 2.0;
        } else {
            return numeros[n / 2];
        }
    }

    public static void main(String[] args) {
        int[] numeros = {3, 5, 1, 4, 2};
        System.out.println("La mediana es: " + encontrarMediana(numeros));
    }
}
