import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import {BuyNowData} from './buynowdata';

@Component({
    selector:'loginform',
    templateUrl:'./buynow.component.html'
})
export class BuyNowComponent {

    buynow= new BuyNowData();


    save(loginForm:NgForm){
        console.log(loginForm.form);
        console.log('save data' + JSON.stringify(loginForm.value))
    }
    
}