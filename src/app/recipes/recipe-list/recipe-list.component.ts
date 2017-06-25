import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
      new Recipe("Quiche Loraine", "Quiche au pomme de terre et oignon", "http://static.cuisineaz.com/610x610/i23896-quiche-lorraine-au-fromage-et-aux-lardons.jpeg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
