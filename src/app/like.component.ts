import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-like',
    templateUrl:'./like.component.html'
})
export class LikeComponent implements OnInit {
    numberoflikes :number=0;
    numberofdislikes : number=0;

    likebutton(){
 this.numberoflikes++;
    }
 dislikebutton(){
this.numberofdislikes++;
 }
constructor(){

}
    ngOnInit(){

    }
}