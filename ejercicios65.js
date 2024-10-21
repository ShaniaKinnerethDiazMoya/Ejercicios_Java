import java.util.Arrays;
import java.util.HashSet;

public class EliminarDuplicados {
    public static int[] eliminarDuplicados(int[] array) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : array) {
            set.add(num);
        }
        return set.stream().mapToInt(Integer::intValue).toArray();
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 2, 3, 4, 4, 5};
        int[] sinDuplicados = eliminarDuplicados(array);
        System.out.println("Array sin duplicados: " + Arrays.toString(sinDuplicados));
    }
}
