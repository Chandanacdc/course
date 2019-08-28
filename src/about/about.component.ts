import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    templateUrl:'about.component.html'
})
export class AboutComponent{
 constructor( private location: Location ) { 
  }
 goBack() {
    // window.history.back();
    this.location.back();

    console.log( 'goBack()...' );
  }
}