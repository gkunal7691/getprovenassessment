import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userArray: Array<User> = [];
  constructor() {}

  register(value: User) {
    this.userArray.push(value);
  }
}
