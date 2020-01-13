import { Component, OnInit } from '@angular/core';
import {Myquote} from '../myquote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Myquote[] = [
    
    new Myquote('Sarah','Daniel','The Most lethal weapon a human being can make is a team',new Date(20/12/2020)),
    new Myquote('Daniel','Daniel','Its one thing to go to school to learn is another Expirience is one thing growth is another',new Date(12/1/2020)),
    new Myquote('James','Barrack Obama','Yes We Can',new Date(13/12/2020)),
  
  ]

  addNewQuote(newquote){
    newquote.name = newquote.name;
    newquote.date = new Date(newquote.date)
    this.quote.push(newquote)
  }
  toggleDetails(index){
    this.quote[index].showDetails = !this.quote[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
