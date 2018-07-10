import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

import { Store } from "store";
import { AuthService } from "../../../../auth/shared/services/auth/auth.service";

@Injectable()
export class ScheduleService {
  private date$ = new BehaviorSubject(new Date());
  schedule$: Observable<any[]> = this.date$.do((next: any) =>
    this.store.set("date", next)
  );

  constructor(private store: Store, private authService: AuthService) {}

  updateDate(date: Date) {
    this.date$.next(date);
  }
}
