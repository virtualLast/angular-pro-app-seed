import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-header.component.scss'],
  templateUrl: 'app-header.component.html'
})

export class AppHeaderComponent implements OnInit {

  @Input() user: User;
  @Output() logout = new EventEmitter<any>();

  constructor() { }

  logoutUser() {
    this.logout.emit()
  }

  ngOnInit() { }
}