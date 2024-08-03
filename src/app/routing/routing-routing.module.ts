import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/component/home/home.component';
import { UsersListComponent } from '../users/users-list/users-list.component';
import { UsersFormComponent } from '../users/users-form/users-form.component';
import { SingleUserComponent } from '../users/single-user/single-user.component';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductFormComponent } from '../products/product-form/product-form.component';
import { SingleProductComponent } from '../products/single-product/single-product.component';
import { PageNotFoundComponent } from '../shared/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersListComponent,
    children: [
      {
        path: 'addUser',
        component: UsersFormComponent
      },
      {
        path: ':userId',
        component: SingleUserComponent
      },
      {
        path: ':userId/editUser',
        component: UsersFormComponent
      },
    ]
  },
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      {
        path: 'addProduct',
        component: ProductFormComponent
      },
      {
        path: ':prodId',
        component: SingleProductComponent
      },
      {
        path: ':prodId/editProduct',
        component: ProductFormComponent
      },
    ]
  }, {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: "**",
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
