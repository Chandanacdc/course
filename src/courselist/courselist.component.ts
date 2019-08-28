import { CourseService } from './courselist';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {CourseListInterface} from './courselist.interface';
@Component({
    templateUrl:"./courselist.component.html",
})

export class CourseListComponent implements OnInit{
   imgWidth:number=200;
  imgHeight:number=100;
  showImg:boolean = false;
  title='Course Lists'
  courselist :CourseListInterface[]= [];
  _searchCourse:string;
  searchedCourse:CourseListInterface[]=[]
  errorMessage:string;

     constructor( private location: Location,private courseservice:CourseService ) { 
  }

ngOnInit(): void {
  this.courseservice.getCourse().subscribe(
  courselist =>{
  this.courselist = courselist;
  this.searchedCourse = this.courselist;
},
error =>this.errorMessage = error

  );
}

get courseSearch():string{
  return this._searchCourse;
}

set courseSearch(value:string)
{
  this._searchCourse = value;
  this.searchedCourse = this.courseSearch ? this.searchCourse(this.courseSearch):this.courselist;
}

searchCourse(search:string):CourseListInterface[]{

  search = search.toLocaleLowerCase();
   return this.courselist.filter((courses:CourseListInterface)=>
   courses.Mentor.toLocaleLowerCase()== search);
  
}

 goBack() {
    this.location.back();
  }

onRatingClicked(rate:string):void{
  this.title=rate;
}

switchimg():void{
  this.showImg = !this.showImg;
}
}