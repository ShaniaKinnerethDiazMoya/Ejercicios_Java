public class Main {
    public static boolean esPrimo(int num) {
        if (num <= 1) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    public static int contarPrimos(int inicio, int fin) {
        int cuenta = 0;
        for (int i = inicio; i <= fin; i++) {
            if (esPrimo(i)) {
                cuenta++;
            }
        }
        return cuenta;
    }

    public static void main(String[] args) {
        int inicio = 10, fin = 30;
        System.out.println(contarPrimos(inicio, fin));  // 6
    }
}
