import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewCustomerComponent } from '../app/forms/new-customer/new-customer.component';
import { UsersListComponent } from '../app/users-list/users-list.component';
import { UpdateUserComponent } from './forms/update-user/update-user.component';
const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'new-customer', component: NewCustomerComponent },
  { path: 'edit-customer', component: UpdateUserComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
