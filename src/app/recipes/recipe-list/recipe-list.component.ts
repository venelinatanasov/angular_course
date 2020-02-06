import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Kyufte', 'Basi qkoto 4uek', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fic.pics.livejournal.com%2Falex_barbov%2F48771207%2F617405%2F617405_original.jpg&f=1&nofb=1'),
    new Recipe('Kebapche', 'Mn qko 4uek', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fitalianrentalblog.files.wordpress.com%2F2014%2F12%2F523996253.jpg%3Fw%3D470%26h%3D313&f=1&nofb=1'),






  ];
  constructor() { }

  ngOnInit() {
  }

}
