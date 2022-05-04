import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Output() ratingClicked: EventEmitter<string>=new EventEmitter();
  @Input() rating:number=4;
  starWidth:number;

  

  ngOnChanges(): void {
    this.starWidth=this.rating*100/5
  }
    starClicking():void{
      console.log(this.rating)//it will show in our console how many rating are there //
    this.ratingClicked.emit(" My Rating is:"+this.rating);
    
  }

}
