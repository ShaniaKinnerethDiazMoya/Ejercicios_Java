public class Main {
    public static int multiplicarTodos(int[] array) {
        int producto = 1;
        for (int num : array) {
            producto *= num;
        }
        return producto;
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4};
        System.out.println(multiplicarTodos(array));  // 24
    }
}
