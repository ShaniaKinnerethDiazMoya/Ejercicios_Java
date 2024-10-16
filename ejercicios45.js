public class Main {
    public static void main(String[] args) {
        String cadena = "HolaMundo";
        
        if (cadena.matches("[a-zA-Z]+")) {
            System.out.println("La cadena contiene solo letras.");
        } else {
            System.out.println("La cadena no contiene solo letras.");
        }
    }
}
