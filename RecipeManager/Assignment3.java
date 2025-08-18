
package RecipeManager;

import java.io.IOException;
import java.util.Scanner;

/**
 * Driver class for Recipe Manager.
 * Handles menus and user interaction.
 */
public class Assignment3 {
    private static RecipeManager manager = new RecipeManager();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Welcome to Aravind’s Recipe Manager.");

        try {
            manager.loadRecipes("recipelist.txt");
        } catch (IOException e) {
            System.out.println("Error loading recipes file. Exiting...");
            return;
        }

        printMenu();

        boolean running = true;
        while (running) {
            System.out.print("Please enter your choice: ");
            String input = scanner.nextLine();

            if (!input.matches("\\d+")) {
                System.out.println("Please only type digits (0–4).");
                continue;
            }

            int choice = Integer.parseInt(input);

            switch (choice) {
                case 0: printMenu(); break;
                case 1: showRecipes(); break;
                case 2: orderBread(); break;
                case 3: printShoppingList(); break;
                case 4: running = false; break;
                default: System.out.println("Invalid choice. Enter 0–4."); break;
            }
        }

        System.out.println("Thank you for using Recipe Manager!");
    }

    private static void printMenu() {
        System.out.println("\nPlease select one of the following options:");
        System.out.println("1. Show available recipes.");
        System.out.println("2. Create Shopping List.");
        System.out.println("3. Print Shopping List.");
        System.out.println("4. Quit Program.");
        System.out.println("0. Reprint this menu.");
    }

    private static void showRecipes() {
        System.out.println("Available Recipes:");
        int i = 1;
        for (Recipe recipe : manager.getRecipes()) {
            System.out.println(i + ". " + recipe.getName());
            i++;
        }
    }

    private static void orderBread() {
        System.out.print("Which bread would you like? ");
        String input = scanner.nextLine();
        if (!input.matches("\\d+")) {
            System.out.println("Please only type digits.");
            return;
        }
        int breadNum = Integer.parseInt(input);

        Recipe recipe = manager.getRecipeByIndex(breadNum - 1);
        if (recipe == null) {
            System.out.println("Invalid bread number.");
            return;
        }

        System.out.print("How much of this bread would you like? ");
        input = scanner.nextLine();
        if (!input.matches("\\d+")) {
            System.out.println("Please only type digits.");
            return;
        }
        int qty = Integer.parseInt(input);
        if (qty < 0) {
            System.out.println("Quantity cannot be negative.");
            return;
        }

        recipe.setQuantityOrdered(qty);
        System.out.println("Updated order: " + qty + " " + recipe.getName() + " loaf/loaves.");
    }

    private static void printShoppingList() {
        String list = manager.generateShoppingList();
        System.out.println(list);

        System.out.print("Do you want to save this list (Y/n)? ");
        String choice = scanner.nextLine().trim().toLowerCase();
        if (choice.equals("y") || choice.equals("")) {
            try {
                manager.saveShoppingList(list, "shoppinglist.txt");
                System.out.println("Shopping list saved to shoppinglist.txt");
            } catch (IOException e) {
                System.out.println("Error saving shopping list.");
            }
        }
    }
}
