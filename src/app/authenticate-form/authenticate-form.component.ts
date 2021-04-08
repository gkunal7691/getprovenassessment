import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticate-form',
  templateUrl: './authenticate-form.component.html',
  styleUrls: ['./authenticate-form.component.scss'],
})
export class AuthenticateFormComponent implements OnInit {
  isRegister = true;
  constructor() {}

  ngOnInit(): void {}

  onRegister(event: any) {
    this.isRegister = false;
    // this.userService.register(this.registerForm.value);
  }
}
