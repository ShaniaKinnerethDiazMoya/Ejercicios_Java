import java.util.Arrays;

public class SumarArrays {
    public static void main(String[] args) {
        int[] array1 = {1, 2, 3, 4, 5};
        int[] array2 = {6, 7, 8, 9, 10};
        int[] suma = new int[array1.length];

        for (int i = 0; i < array1.length; i++) {
            suma[i] = array1[i] + array2[i];
        }

        System.out.println("Suma de los arrays: " + Arrays.toString(suma));
    }
}
