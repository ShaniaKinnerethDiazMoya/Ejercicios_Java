import java.util.Arrays;

public class CopiarArray {
    public static int[] copiarArray(int[] original) {
        return Arrays.copyOf(original, original.length);
    }

    public static void main(String[] args) {
        int[] original = {1, 2, 3, 4, 5};
        int[] copia = copiarArray(original);
        System.out.println("Array original: " + Arrays.toString(original));
        System.out.println("Copia del array: " + Arrays.toString(copia));
    }
}
