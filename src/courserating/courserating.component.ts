import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'rating',
    templateUrl:'./courserating.component.html',
    styleUrls:['./courserating.component.css']
})

export class CourseRatingComponent{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClick:EventEmitter<string>=new EventEmitter<string>()

    ngOnChanges(): void {
        this.starWidth=this.rating*75/5;
    }
    onClick():void{
        this.ratingClick.emit(`The Movie rating ${this.rating} is clicked`);
    }

}