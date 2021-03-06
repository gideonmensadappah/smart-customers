import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewCustomerComponent } from './forms/new-customer/new-customer.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './forms/update-user/update-user.component';
@NgModule({
  declarations: [AppComponent, NewCustomerComponent, UsersListComponent, UpdateUserComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
