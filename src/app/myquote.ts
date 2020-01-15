export class Myquote {
  showDetails : boolean;
  constructor (public name : string,
    public author: string,
    public words : string,
    public date : Date,
    ){
      this.showDetails=false;
      this.date=new Date
    }

}