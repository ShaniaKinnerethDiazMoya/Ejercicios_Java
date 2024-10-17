public class Main {
    public static boolean soloNumeros(String cadena) {
        return cadena.matches("\\d+");
    }

    public static void main(String[] args) {
        String cadena = "12345";
        System.out.println(soloNumeros(cadena));  // true
    }
}
