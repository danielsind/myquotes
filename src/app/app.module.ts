import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { CreateComponent } from './createQuote/create.component';
import { QuoteDetailComponent } from './quote/quote-detail.component';
import { LikeComponent } from './like.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CreateComponent,
    QuoteDetailComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
