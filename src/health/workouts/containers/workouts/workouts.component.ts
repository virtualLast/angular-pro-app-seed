import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { WorkoutsService, Workout } from '../../../shared/services/workouts/workouts.service';
import { Store } from 'store';

@Component({
  selector: 'workouts',
  styleUrls: ['workouts.component.scss'],
  templateUrl: 'workouts.component.html'
})

export class WorkoutsComponent implements OnInit, OnDestroy {

  workouts$: Observable<Workout[]>;
  subscription: Subscription;

  constructor(
    private workoutsService: WorkoutsService,
    private store: Store
  ) { }

  removeWorkout(event: Workout) {
    this.workoutsService.removeWorkout(event.$key);
  }

  ngOnInit() {
    this.workouts$ = this.store.select<Workout[]>('workouts');
    this.subscription = this.workoutsService.workouts$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}