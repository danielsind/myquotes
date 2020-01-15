import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { CreateComponent } from './createQuote/create.component';
import { QuoteDetailComponent } from './quote/quote-detail.component';
import { LikeComponent } from './like.component';
import { DateAgoPipe } from './date-count-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CreateComponent,
    QuoteDetailComponent,
    LikeComponent,
    DateAgoPipe,
    TimeAgoPipe,
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
