import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';

@Component({
  selector: 'workout',
  templateUrl: 'workout.component.html',
  styleUrls: ['workout.component.scss']
})

export class WorkoutComponent implements OnInit, OnDestroy {

  workout$: Observable<Workout>;
  subscription: Subscription

  constructor(
    private workoutService: WorkoutsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async addWorkout(event: Workout) {
    await this.workoutService.addWorkout(event);
    this.backToWorkouts();
  }

  async removeWorkout(event: Workout) {    
    const key = this.route.snapshot.params.id;
    await this.workoutService.removeWorkout(key);
    this.backToWorkouts();
  }

  async updateWorkout(event: Workout) {
    const key = this.route.snapshot.params.id;
    await this.workoutService.updateWorkout(key, event);
    this.backToWorkouts();
  }

  backToWorkouts() {
    this.router.navigate(['workouts']);
  }

  ngOnInit() {
    this.subscription = this.workoutService.workouts$.subscribe();
    this.workout$ = this.route.params
      .switchMap(param => this.workoutService.getWorkout(param.id));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}