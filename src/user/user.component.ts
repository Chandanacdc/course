import { FormBuilder,FormGroup,FormArray} from '@angular/forms';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
templateUrl:'./user.component.html',

})


export class UserComponent implements OnInit{
  user = new User() ;
  registerForm:FormGroup; 

  
  constructor(private fb:FormBuilder){

  }
  
  ngOnInit():void{
    this.registerForm=this.fb.group({
      firstName :'',
       userName :'',
      password:'',
      confirm:'',
      sendNewCourseMail:'',
      email:'',
      days:'',
     
    })
    

    }
   
    

    save(){
        console.log(this.registerForm);
        console.log('saved data'+ JSON.stringify(this.registerForm.value));
      }
    
}