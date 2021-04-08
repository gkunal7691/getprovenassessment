import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: User[] = [
  {
    userName: 'ram12',
    email: 'ram@gamil.com',
    age: 19,
    country: 'India',
    phone: 9293495949,
  },
  {
    userName: 'rahul12',
    email: 'rahul12@gamil.com',
    age: 22,
    country: 'Pakistan',
    phone: 9293494549,
  },
  {
    userName: 'user1',
    email: 'user1@gamil.com',
    age: 28,
    country: 'Russia',
    phone: 9293435949,
  },
  {
    userName: 'user2',
    email: 'user2@gamil.com',
    age: 60,
    country: 'Japan',
    phone: 9233495949,
  },
  {
    userName: 'user3',
    email: 'user3@gamil.com',
    age: 45,
    country: 'China',
    phone: 9293495239,
  },
];
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['userName', 'email', 'age', 'country', 'phone'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private userService: UserService) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(
      ELEMENT_DATA.concat(this.userService.userArray)
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
