import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user.model';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  createNewUser(formValue: User, event: Event) {
    event.preventDefault();
    alert('added customer!');
    //customer data:  formValue;
    this.router.navigate(['/']);
  }
}
