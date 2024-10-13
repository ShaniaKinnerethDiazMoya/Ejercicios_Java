public class Main {
    public static void main(String[] args) {
        String frase = "Hola mundo, ¿cómo estás?";
        
        // Separar la cadena por espacios en blanco
        String[] palabras = frase.split("\\s+");
        
        System.out.println("Número de palabras: " + palabras.length);
    }
}
