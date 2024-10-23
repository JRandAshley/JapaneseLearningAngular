import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryDisplayComponent } from './dictionary-display/dictionary-display.component';
import { FormsModule } from '@angular/forms';
import { DictionaryConjugationComponent } from './dictionary-conjugation/dictionary-conjugation.component';



@NgModule({
  declarations: [
    DictionaryDisplayComponent,
    DictionaryConjugationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DictionaryDisplayComponent
  ]
})
export class DictionaryBaseModule { }
