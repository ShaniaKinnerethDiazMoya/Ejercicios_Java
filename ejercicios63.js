public class PromedioArrayBidimensional {
    public static double calcularPromedio(int[][] array) {
        int suma = 0;
        int contador = 0;
        for (int[] fila : array) {
            for (int num : fila) {
                suma += num;
                contador++;
            }
        }
        return (double) suma / contador;
    }

    public static void main(String[] args) {
        int[][] array = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("El promedio es: " + calcularPromedio(array));
    }
}
