import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// third party modules
import { AngularFireDatabaseModule } from "angularfire2/database";

// components
import { ListItemComponent } from "./components/list-item/list-item.component";

// pipes
import { JoinPipe } from "./pipes/join.pipe";
import { WorkoutPipe } from "./pipes/workout.pipe";

// services
import { MealsService } from "./services/meals/meals.service";
import { WorkoutsService } from "./services/workouts/workouts.service";
import { ScheduleService } from "./services/schedule/schedule.service";

@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  exports: [ListItemComponent, JoinPipe, WorkoutPipe],
  declarations: [ListItemComponent, JoinPipe, WorkoutPipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService, WorkoutsService, ScheduleService]
    };
  }
}
