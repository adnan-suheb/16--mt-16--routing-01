import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RoutingRoutingModule } from '../routing/routing-routing.module';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersFormComponent,
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingRoutingModule
  ],
  exports: [UsersListComponent]
})
export class UsersModule { }
