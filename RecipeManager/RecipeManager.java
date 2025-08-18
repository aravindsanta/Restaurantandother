package RecipeManager;
import java.io.*;
import java.util.*;

/**
 * Manages the list of recipes, loads them from file,
 * and generates shopping lists.
 */
public class RecipeManager {
    private List<Recipe> recipes = new ArrayList<>();

    // Load recipes from recipelist.txt
    public void loadRecipes(String filename) throws IOException {
        try (Scanner scanner = new Scanner(new File(filename))) {
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine().trim();

                if (line.startsWith("Recipe")) {
                    String recipeName = line.substring(7).trim();
                    double flour = 0, sugar = 0, eggs = 0, yeast = 0, butter = 0;

                    for (int i = 0; i < 5 && scanner.hasNextLine(); i++) {
                        String[] parts = scanner.nextLine().trim().split("\\s+");
                        if (parts.length == 2) {
                            String ingredient = parts[0].toLowerCase();
                            double amount = Double.parseDouble(parts[1]);

                            switch (ingredient) {
                                case "flour": flour = amount; break;
                                case "sugar": sugar = amount; break;
                                case "eggs": eggs = amount; break;
                                case "yeast": yeast = amount; break;
                                case "butter": butter = amount; break;
                            }
                        }
                    }

                    recipes.add(new Recipe(recipeName, flour, sugar, eggs, yeast, butter));
                }
            }
        }
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public Recipe getRecipeByIndex(int index) {
        if (index >= 0 && index < recipes.size()) {
            return recipes.get(index);
        }
        return null;
    }

    // Generate shopping list string
    public String generateShoppingList() {
        double totalFlour = 0, totalSugar = 0, totalEggs = 0, totalYeast = 0, totalButter = 0;
        StringBuilder sb = new StringBuilder();

        for (Recipe recipe : recipes) {
            if (recipe.getQuantityOrdered() > 0) {
                sb.append(recipe.getQuantityOrdered())
                  .append(" ").append(recipe.getName()).append(" loaf/loaves.\n");

                totalFlour += recipe.getTotalFlour();
                totalSugar += recipe.getTotalSugar();
                totalEggs += recipe.getTotalEggs();
                totalYeast += recipe.getTotalYeast();
                totalButter += recipe.getTotalButter();
            }
        }

        sb.append("\nYou will need a total of:\n");
        if (totalYeast > 0) sb.append(totalYeast).append(" grams of yeast\n");
        if (totalFlour > 0) sb.append(totalFlour).append(" grams of flour\n");
        if (totalSugar > 0) sb.append(totalSugar).append(" grams of sugar\n");
        if (totalEggs > 0) sb.append((int) totalEggs).append(" egg(s)\n");
        if (totalButter > 0) sb.append(totalButter).append(" grams of butter\n");

        return sb.toString();
    }

    // Save shopping list to file
    public void saveShoppingList(String content, String filename) throws IOException {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
            writer.write(content);
        }
    }
}

    

