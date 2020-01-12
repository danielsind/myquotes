import {Component,EventEmitter,OnInit,Output} from '@angular/core';
import {Myquote} from '../myquote';
 
@Component({
    selector : 'app-create',
    templateUrl : 'create.component.html',
}) 
export class CreateComponent  implements OnInit {
    freshQuote = new Myquote ("","","",new Date());

    @Output() addQuote = new EventEmitter<Myquote>();

    constructor() { }

    ngOnInit() {
    }

}