package JAVA;

import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        int[] shuffledArray = shuffleArray(originalArray);
        
        System.out.println("Original Array: " + Arrays.toString(originalArray));
        System.out.println("Shuffled Array: " + Arrays.toString(shuffledArray));
    }

    public static int[] shuffleArray(int[] array) {
        Random rand = new Random();
        int[] shuffledArray = Arrays.copyOf(array, array.length);

        for (int i = array.length - 1; i > 0; i--) {
            int index = rand.nextInt(i + 1);

            // Swap the elements at index i and index
            int temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[index];
            shuffledArray[index] = temp;
        }

        return shuffledArray;
    }
}
