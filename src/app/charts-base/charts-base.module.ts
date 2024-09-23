import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsIndexComponent } from './charts-index/charts-index.component';
import { FormsModule } from '@angular/forms';
import { ChartsSyllabaryComponent } from './charts-syllabary/charts-syllabary.component';


@NgModule({
  declarations: [
    ChartsIndexComponent,
    ChartsSyllabaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChartsIndexComponent,
    ChartsSyllabaryComponent
  ]
})
export class ChartsBaseModule { }
