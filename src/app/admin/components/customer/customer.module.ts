import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* TODO: Ders 11:
         Eğer https://...com/admin/customers/x denirlirse buradaki route alacak.
         Eğer Customer kendi içerisinde birden fazla route içermiyorsa burada adres vermeye gerek kalmıyor.
      {path: "x", component: CustomerComponent}
      */
      {path: "", component: CustomerComponent}
    ])
  ]
})
export class CustomerModule { }
