import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryDisplayComponent } from './dictionary-display/dictionary-display.component';



@NgModule({
  declarations: [
    DictionaryDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DictionaryDisplayComponent
  ]
})
export class DictionaryBaseModule { }
