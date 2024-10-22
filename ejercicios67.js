import java.util.Arrays;

public class UnirArrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {4, 5, 6};

        int[] arrUnidos = new int[arr1.length + arr2.length];

        System.arraycopy(arr1, 0, arrUnidos, 0, arr1.length);
        System.arraycopy(arr2, 0, arrUnidos, arr1.length, arr2.length);

        System.out.println("Arrays unidos: " + Arrays.toString(arrUnidos));
    }
}
