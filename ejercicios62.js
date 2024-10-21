public class MayorEnArrayBidimensional {
    public static int encontrarMayor(int[][] array) {
        int max = array[0][0];
        for (int[] fila : array) {
            for (int num : fila) {
                if (num > max) {
                    max = num;
                }
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[][] array = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("El número mayor es: " + encontrarMayor(array));
    }
}
