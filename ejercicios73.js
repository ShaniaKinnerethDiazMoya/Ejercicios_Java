import java.util.ArrayList;

public class NumerosImpares {
    public static void main(String[] args) {
        int limite = 20; // límite de la lista
        ArrayList<Integer> impares = new ArrayList<>();

        for (int i = 1; i <= limite; i++) {
            if (i % 2 != 0) {
                impares.add(i);
            }
        }

        System.out.println("Lista de números impares: " + impares);
    }
}
