public class Main {
    public static int sumarPares(int[] array) {
        int suma = 0;
        for (int num : array) {
            if (num % 2 == 0) {
                suma += num;
            }
        }
        return suma;
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6};
        System.out.println(sumarPares(array));  // 12
    }
}
