import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RoutingRoutingModule } from '../routing/routing-routing.module';



@NgModule({
  declarations: [


    ProductListComponent,
    ProductFormComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingRoutingModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
