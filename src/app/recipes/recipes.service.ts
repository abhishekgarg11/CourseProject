import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a Test Description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/08/old-delhi-style-butter-chicken.jpg'),

        new Recipe('Another Test Recipe', 'This is a Another Description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/08/old-delhi-style-butter-chicken.jpg')

    ];
    public selectedRecipe = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

}