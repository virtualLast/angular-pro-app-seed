import { Component, OnInit, OnDestroy } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { ScheduleService } from "../../../shared/services/schedule/schedule.service";

import { Store } from "store";

@Component({
  selector: "schedule",
  styleUrls: ["schedule.component.scss"],
  templateUrl: "schedule.component.html"
})
export class ScheduleComponent implements OnInit, OnDestroy {
  date$: Observable<Date>;
  subscriptions: Subscription[] = [];
  constructor(private scheduleService: ScheduleService, private store: Store) {}

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  ngOnInit() {
    this.date$ = this.store.select("date");
    this.subscriptions = [this.scheduleService.schedule$.subscribe()];
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
