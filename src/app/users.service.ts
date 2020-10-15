import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  serverUrl = 'http://127.0.0.1:8000/api';
  refreshCustomersList = new Subject();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.serverUrl);
  }

  addCustomer(customerData: User): Observable<User> {
    return this.http.post<User>(this.serverUrl, customerData).pipe(
      tap(() => {
        this.refreshCustomersList.next();
      })
    );
  }

  updateUser(customer: User, id: string): Observable<any> {
    console.log(customer);
    return this.http.put(`${this.serverUrl}/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.serverUrl}/${id}`);
  }
}
