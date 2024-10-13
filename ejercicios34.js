public class Main {
    public static void main(String[] args) {
        int min = 5;
        int max = 15;
        
        int numeroAleatorio = (int)(Math.random() * (max - min + 1) + min);
        System.out.println("Número aleatorio entre " + min + " y " + max + ": " + numeroAleatorio);
    }
}
