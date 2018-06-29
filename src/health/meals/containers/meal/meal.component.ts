import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';


@Component({
  selector: 'meal',
  templateUrl: 'meal.component.html',
  styleUrls: ['meal.component.scss']
})

export class MealComponent implements OnInit {
  constructor(
    private mealService: MealsService,
    private router: Router
  ) { }

  async addMeal(event: Meal) {
    await this.mealService.addMeal(event);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }

  ngOnInit() { }
}