import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardsDeckComponent } from './flashcards-base/flashcards-deck/flashcards-deck.component';
import { ChartsIndexComponent } from './charts-base/charts-index/charts-index.component';
import { ChartsSyllabaryComponent } from './charts-base/charts-syllabary/charts-syllabary.component';
import { DefaultHomePageComponent } from './default-home-page/default-home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'charts', component: ChartsSyllabaryComponent },
  { path: 'flashcards', component: FlashcardsDeckComponent },
  { path: 'testing', component: ChartsIndexComponent},
  { path: '', component: DefaultHomePageComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
