import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-nav.component.scss'],
  templateUrl: 'app-nav.component.html'
})

export class AppNavComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}