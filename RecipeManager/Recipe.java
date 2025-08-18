
package RecipeManager;
/**
 * Recipe class representing a bread recipe and its ingredients.
 * Contains only fields, getters, setters, and basic logic.
 */
public class Recipe {
    private String name;
    private double flour;
    private double sugar;
    private double eggs;
    private double yeast;
    private double butter;
    private int quantityOrdered;

    public Recipe(String name, double flour, double sugar, double eggs, double yeast, double butter) {
        this.name = name;
        this.flour = flour;
        this.sugar = sugar;
        this.eggs = eggs;
        this.yeast = yeast;
        this.butter = butter;
        this.quantityOrdered = 0;
    }

    // Getters
    public String getName() { return name; }
    public double getFlour() { return flour; }
    public double getSugar() { return sugar; }
    public double getEggs() { return eggs; }
    public double getYeast() { return yeast; }
    public double getButter() { return butter; }
    public int getQuantityOrdered() { return quantityOrdered; }

    // Setters
    public void setQuantityOrdered(int quantityOrdered) {
        if (quantityOrdered >= 0) {
            this.quantityOrdered = quantityOrdered;
        }
    }

    // Multiply ingredients based on quantity ordered
    public double getTotalFlour() { return flour * quantityOrdered; }
    public double getTotalSugar() { return sugar * quantityOrdered; }
    public double getTotalEggs() { return eggs * quantityOrdered; }
    public double getTotalYeast() { return yeast * quantityOrdered; }
    public double getTotalButter() { return butter * quantityOrdered; }
}
