import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-authenticate-form',
  templateUrl: './authenticate-form.component.html',
  styleUrls: ['./authenticate-form.component.scss'],
})
export class AuthenticateFormComponent implements OnInit {
  isRegister = true;
  userData: User;

  constructor() {}

  ngOnInit(): void {}

  onRegister(event: any) {
    this.userData = event;
    this.isRegister = false;
    // this.userService.register(this.registerForm.value);
  }
}
