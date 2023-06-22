import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
   recipes: Recipe[] = [
    new Recipe(' Test Recipe','This is simply a test','https://2.bp.blogspot.com/-VjMpIqEsMWY/TpQEbrGtS-I/AAAAAAAAAd8/CG-L0Ugph60/s1600/Koral+fish+fry.jpg')
   ];
}
