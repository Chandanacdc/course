import { BuyNowComponent } from '../buynow/buynow.component';
import { ContactUsComponent } from '../user/contactus.component';
import { UserLoginComponent } from '../user/userlogin.component';
import { UserComponent } from '../user/user.component';
import { CourseDetailComponent } from '../coursedetail/coursedetail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../about/about.component';
import {FrontComponent} from '../front/front.component';
import {CourseListComponent} from '../courselist/courselist.component';
import {ErrorComponent} from '../error/error.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'front',component:FrontComponent},
  {path:'courselist',component:CourseListComponent},
  {path:'error',component:ErrorComponent},
  {path:'courselist/:id',component:CourseDetailComponent},
  {path:'register',component:UserComponent},
  {path:'login',component:UserLoginComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'',component:FrontComponent},
  {path:'buynow',component:BuyNowComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
