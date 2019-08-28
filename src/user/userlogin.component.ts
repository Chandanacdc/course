import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import {UserLoginData} from './userlogin'

@Component({
    selector:'loginform',
    templateUrl:'./userlogin.component.html'
})
export class UserLoginComponent {

    login= new UserLoginData();


    save(loginForm:NgForm){
        console.log(loginForm.form);
        console.log('save data' + JSON.stringify(loginForm.value))
    }

    
}