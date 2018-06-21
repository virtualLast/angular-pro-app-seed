import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'register',
  styleUrls: ['register.component.scss'],
  templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
  constructor() { }

  registerUser(event: FormGroup) {
    console.log(event);
  }

  ngOnInit() { }
}