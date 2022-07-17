import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';


/*TODO: Ders10:
   modüller     => import edilir   
   componentler => declare edilir*/
   
@NgModule({
  declarations: [],
  imports: [
    CommonModule,  
    LayoutModule,
    ComponentsModule
  ],
  exports: [
    LayoutModule
  ]
})
export class AdminModule { }
