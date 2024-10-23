public class MatrizIdentidad {
    public static void main(String[] args) {
        int size = 4; // tamaño de la matriz identidad
        int[][] identidad = new int[size][size];

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (i == j) {
                    identidad[i][j] = 1;
                } else {
                    identidad[i][j] = 0;
                }
            }
        }

        System.out.println("Matriz Identidad:");
        for (int[] fila : identidad) {
            for (int elemento : fila) {
                System.out.print(elemento + " ");
            }
            System.out.println();
        }
    }
}
