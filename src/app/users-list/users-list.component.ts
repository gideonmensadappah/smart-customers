import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  customers: Array<User>;

  constructor(private usersService: UsersService) {
    this.getUsers();
  }

  ngOnInit(): void {}

  getUsers() {
    this.usersService
      .getUsers()
      .subscribe((res: Array<User>) => (this.customers = res));
  }

  updateUser() {
    alert('update!');
  }

  deleteUser() {
    const res = confirm('are you sure?');
    if (res) {
      // delete!
    }
  }
}
