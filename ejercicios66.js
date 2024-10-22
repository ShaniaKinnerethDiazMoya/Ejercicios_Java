import java.util.ArrayList;
import java.util.Arrays;

public class DiferenciaArrays {
    public static void main(String[] args) {
        Integer[] arr1 = {1, 2, 3, 4, 5};
        Integer[] arr2 = {3, 4, 5, 6, 7};
        
        ArrayList<Integer> diferencia = new ArrayList<>(Arrays.asList(arr1));
        diferencia.removeAll(Arrays.asList(arr2));
        
        System.out.println("Diferencia: " + diferencia);
    }
}
