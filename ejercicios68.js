public class MinimoArray2D {
    public static void main(String[] args) {
        int[][] array2D = {{3, 8, 2}, {5, 12, 1}, {7, 9, 6}};
        int min = array2D[0][0];

        for (int[] row : array2D) {
            for (int elem : row) {
                if (elem < min) {
                    min = elem;
                }
            }
        }

        System.out.println("El número más pequeño es: " + min);
    }
}
