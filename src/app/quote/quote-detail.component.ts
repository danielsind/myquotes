import { Component, OnInit,Input} from "@angular/core";
import {Myquote} from '../myquote';

@Component({
    selector:'app-detail',
    templateUrl:'./quote-detail.component.html',
})
export class QuoteDetailComponent implements OnInit {
    @Input()newquote:Myquote;

    constructor() { }

    ngOnInit() {
    }
}
