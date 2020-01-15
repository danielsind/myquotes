import { Component, OnInit,Input,Output,EventEmitter} from "@angular/core";
import {Myquote} from '../myquote';

@Component({
    selector:'app-detail',
    templateUrl:'./quote-detail.component.html',
})
export class QuoteDetailComponent implements OnInit {
    @Input()newquote:Myquote;
    @Output() isComplete = new EventEmitter<boolean>();

    deleteQuote(complete:boolean){
        this.isComplete.emit(complete);
      }

    constructor() { }

    ngOnInit() {
        console.log(this.newquote)
    }
}
