import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {}
  createNewUser(formValue: User, event: Event): void {
    event.preventDefault();
    alert('added customer!');
    this.usersService.addCustomer(formValue).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/']);
  }
}
