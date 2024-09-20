import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsIndexComponent } from './charts-index/charts-index.component';


@NgModule({
  declarations: [
    ChartsIndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartsIndexComponent
  ]
})
export class ChartsBaseModule { }
