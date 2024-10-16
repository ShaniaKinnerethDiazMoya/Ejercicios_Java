public class Main {
    public static void main(String[] args) {
        String cadena = "Hola Mundo";
        char letra = 'H';
        
        if (cadena.charAt(0) == letra) {
            System.out.println("La cadena comienza con la letra " + letra);
        } else {
            System.out.println("La cadena no comienza con la letra " + letra);
        }
    }
}
