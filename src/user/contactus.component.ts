import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import {ContactUsData} from './contactusdata';

@Component({
    selector:'contactus',
    templateUrl:'./contactus.component.html'
})
export class ContactUsComponent {

    contactus= new ContactUsData();


    save(contactForm:NgForm){
        console.log(contactForm.form);
        console.log('save data' + JSON.stringify(contactForm.value))
    }


   

    
}