import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  constructor() { }

  loginUser(event: FormGroup) {
    console.log(event);
  }

  ngOnInit() { }
}