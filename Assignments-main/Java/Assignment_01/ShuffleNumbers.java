import java.util.Random;

public class ShuffleNumbers {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};
        
        shuffleArray(array);

        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(Integer[] array) {
        int n = array.length;
        Random rand = new Random();

        for (int i = n - 1; i > (n/2); i--) {
            int j = rand.nextInt(i + 1); 
            int temp = array[i]; 
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
