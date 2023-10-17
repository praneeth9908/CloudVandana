package JAVA;

import java.util.HashSet;

public class PangramCheck {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; // Replace with your input
        
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Convert the input string to lowercase to make it case-insensitive
        input = input.toLowerCase();
        
        // Create a HashSet to store unique letters
        HashSet<Character> uniqueLetters = new HashSet<>();
        
        // Iterate through the characters in the input and add them to the HashSet
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (Character.isLetter(c)) {
                uniqueLetters.add(c);
            }
        }
        
        // Check if the HashSet size is equal to 26 (the number of letters in the English alphabet)
        return uniqueLetters.size() == 26;
    }
}
