public class MatrizSimetrica {
    public static void main(String[] args) {
        int[][] matriz = {
            {1, 2, 3},
            {2, 4, 5},
            {3, 5, 6}
        };
        
        boolean esSimetrica = true;
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] != matriz[j][i]) {
                    esSimetrica = false;
                    break;
                }
            }
        }
        
        if (esSimetrica) {
            System.out.println("La matriz es simétrica.");
        } else {
            System.out.println("La matriz no es simétrica.");
        }
    }
}
