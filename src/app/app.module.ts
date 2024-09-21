import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashcardsBaseModule } from './flashcards-base/flashcards-base.module';
import { ChartsBaseModule } from './charts-base/charts-base.module';
import { DefaultHomePageComponent } from './default-home-page/default-home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashcardsBaseModule,
    ChartsBaseModule,
    DefaultHomePageComponent,
    PageNotFoundComponent
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
