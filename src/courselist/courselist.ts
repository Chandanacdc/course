import { CourseListInterface } from './courselist.interface';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'

})

export class CourseService{

    courseUrl = './data/courselist.json';

    constructor(private httpSer:HttpClient) {
    }


    getCourse():Observable<CourseListInterface[]>{
    
        return this.httpSer.get<CourseListInterface[]>(this.courseUrl).pipe(
        tap(data => console.log('Courses : '+JSON.stringify(data))),
        catchError(this.handleError)
    );
    }

    private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
       
    }

}
