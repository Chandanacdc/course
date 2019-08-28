import { BuyNowComponent } from '../buynow/buynow.component';
import { ContactUsComponent } from '../user/contactus.component';
import { UserLoginComponent } from '../user/userlogin.component';
import { UserComponent } from '../user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FrontComponent} from '../front/front.component';
import {CourseComponent} from '../courses/course.component';

import {FooterComponent} from '../footer/footer.component';
import{CourseListComponent} from '../courselist/courselist.component';
import {AboutComponent} from '../about/about.component';
import {ErrorComponent} from '../error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CourseDetailComponent} from '../coursedetail/coursedetail.component';
import {CourseRatingComponent} from '../courserating/courserating.component';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,FrontComponent,CourseComponent,
    FooterComponent,CourseListComponent,
    AboutComponent,ErrorComponent,
    CourseDetailComponent,
    CourseRatingComponent,
    UserComponent,
    UserLoginComponent,
    ContactUsComponent,
    BuyNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
