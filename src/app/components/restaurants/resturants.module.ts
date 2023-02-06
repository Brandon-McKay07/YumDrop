import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ViewComponent } from './view/view.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    OrdersComponent,
    AddNewComponent,
    ViewComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class ResturantsModule { }
