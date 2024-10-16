import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 50};
        int elemento = 30;
        
        boolean contiene = Arrays.stream(array).anyMatch(x -> x == elemento);
        
        if (contiene) {
            System.out.println("El array contiene el elemento " + elemento);
        } else {
            System.out.println("El array no contiene el elemento " + elemento);
        }
    }
}
