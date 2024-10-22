import java.util.HashSet;

public class SubconjuntoArrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {2, 3};

        HashSet<Integer> set = new HashSet<>();
        for (int num : arr1) {
            set.add(num);
        }

        boolean esSubconjunto = true;
        for (int num : arr2) {
            if (!set.contains(num)) {
                esSubconjunto = false;
                break;
            }
        }

        if (esSubconjunto) {
            System.out.println("El array es subconjunto.");
        } else {
            System.out.println("El array no es subconjunto.");
        }
    }
}
