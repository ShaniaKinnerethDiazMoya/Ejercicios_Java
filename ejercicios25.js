import java.util.ArrayList;
import java.util.List;

public class ArregloNumerosPares {
    public static void main(String[] args) {
        int limite = 10;
        List<Integer> numerosPares = new ArrayList<>();

        for (int i = 0; i <= limite; i++) {
            if (i % 2 == 0) {
                numerosPares.add(i);
            }
        }

        System.out.println("Arreglo de números pares: " + numerosPares);
    }
  }
          
