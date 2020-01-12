import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { CreateComponent } from './createQuote/create.component';
import { QuoteDetailComponent } from './quote/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CreateComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
