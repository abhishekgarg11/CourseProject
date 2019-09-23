import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test Description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/08/old-delhi-style-butter-chicken.jpg'),

    new Recipe('Another Test Recipe', 'This is a Another Description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/08/old-delhi-style-butter-chicken.jpg')

  ];
  selectedRecipe:Recipe;
  @Output() recipeItemSelected=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeItemSelected(recipe:Recipe) {
    this.recipeItemSelected.emit(recipe);
  }
}

