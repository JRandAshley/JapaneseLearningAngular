import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardsDeckComponent } from './flashcards-deck/flashcards-deck.component';
import { FlashcardsDetailsComponent } from './flashcards-details/flashcards-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FlashcardsDeckComponent,
    FlashcardsDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FlashcardsDeckComponent,
    FlashcardsDetailsComponent
  ]
})
export class FlashcardsBaseModule { }
