import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  customers: Array<User>;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.usersService.refreshCustomersList.subscribe(() => {
      this.customersList();
    });
    this.customersList();
  }

  private customersList(): void {
    this.usersService.getUsers().subscribe((res: Array<User>) => {
      this.customers = res;
    });
  }

  updateUser({ fullName, email, phone, id }: User): void {
    this.router.navigate(['/edit-customer'], {
      queryParams: {
        fullName,
        email,
        id,
        phone,
      },
    });
  }

  deleteUser(id: string, name: string): void {
    const res = confirm(`are you sure you want to delete ${name}?`);
    if (res) {
      this.usersService.deleteCustomer(id).subscribe(() => {
        this.customersList();
      });
    }
  }
}
