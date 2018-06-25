import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealsModule } from './meals/meals.module';
import { ScheduleModule } from './schedule/schedule.module';
import { WorkoutsModule } from './workouts/workouts.module';

export const ROUTES: Routes = [
  {
    path: 'meals', loadChildren: './meals/meals.module#MealsModule' 
  },
  {
    path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule' 
  },
  {
    path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: []
})
export class HealthModule { }
