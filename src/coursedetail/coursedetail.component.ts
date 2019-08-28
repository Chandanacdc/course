import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl:'./coursedetail.component.html',
})

export class CourseDetailComponent implements OnInit{
pgtitle:string='Course Details';
constructor(private route:ActivatedRoute,private router:Router){}
course;
ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pgtitle += `: ${id}`;
    this.course={
        'courseId':id,
        'courseName':'Python',
        'Mentor':'Gaurav',
        'coursePrice':2000,
    }
}

onBack():void{
    this.router.navigate(['/courselist']);
}
}
