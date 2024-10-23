import java.util.ArrayList;

public class NumerosPrimos {
    public static void main(String[] args) {
        int limite = 30; // límite de la lista
        ArrayList<Integer> primos = new ArrayList<>();

        for (int i = 2; i <= limite; i++) {
            if (esPrimo(i)) {
                primos.add(i);
            }
        }

        System.out.println("Lista de números primos: " + primos);
    }

    public static boolean esPrimo(int numero) {
        if (numero < 2) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }
}
