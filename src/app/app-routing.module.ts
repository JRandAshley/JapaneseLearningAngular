import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardsDeckComponent } from './flashcards-base/flashcards-deck/flashcards-deck.component';
import { ChartsIndexComponent } from './charts-base/charts-index/charts-index.component';

const routes: Routes = [
  { path: 'flashcards', component: FlashcardsDeckComponent },
  { path: 'charts', component: ChartsIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
