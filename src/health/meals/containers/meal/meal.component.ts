import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  templateUrl: 'meal.component.html',
  styleUrls: ['meal.component.scss']
})

export class MealComponent implements OnInit, OnDestroy {

  meal$: Observable<Meal>;
  subscription: Subscription

  constructor(
    private mealService: MealsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async addMeal(event: Meal) {
    await this.mealService.addMeal(event);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }

  ngOnInit() {
    this.subscription = this.mealService.meals$.subscribe();
    this.meal$ = this.route.params
      .switchMap(param => this.mealService.getMeal(param.id));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}