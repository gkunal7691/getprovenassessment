import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

// const ELEMENT_DATA: User[] = [
//   {
//     userName: 1,
//     email: 'Hydrogen',
//     age: 1.0079,
//     country: 'H',
//     phone: 993939393993,
//   },
//   {
//     userName: 2,
//     email: 'Helium',
//     age: 4.0026,
//     country: 'He',
//     phone: 993939393993,
//   },
//   {
//     userName: 3,
//     email: 'Lithium',
//     age: 6.941,
//     country: 'Li',
//     phone: 993939393993,
//   },
//   {
//     userName: 4,
//     email: 'Beryllium',
//     age: 9.0122,
//     country: 'Be',
//     phone: 993939393993,
//   },
//   {
//     userName: 5,
//     email: 'Boron',
//     age: 10.811,
//     country: 'B',
//     phone: 993939393993,
//   },
// ];
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'email', 'age', 'country', 'phone'];
  dataSource: Array<User>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.dataSource = this.userService.userArray;
  }
}
