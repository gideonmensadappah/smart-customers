import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}
  customer: any;
  id: string;
  fullName: string;
  email: string;
  phone: string;

  ngOnInit(): void {
    const customer = this.route.snapshot.queryParams;
    this.customer = customer;
    const { id, fullName, email, phone } = customer;
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
  }

  update(updatedCustomerValue: User): void {
    this.usersService
      .updateUser(updatedCustomerValue, this.id)
      .subscribe((res) => console.log(res));
    this.router.navigate(['/']);
  }
}
