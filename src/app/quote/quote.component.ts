import { Component, OnInit } from '@angular/core';
import {Myquote} from '../myquote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Myquote[] = [{name:'Sarah',author:'Daniel',words:'The Most lethal weapon a human being can make is a team',date:new Date(20/12/2020)}]

  constructor() { }

  ngOnInit() {
  }

}
