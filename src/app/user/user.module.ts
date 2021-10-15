import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { FooterUserComponent } from './footer-user/footer-user.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegistrationuserComponent } from './registrationuser/registrationuser.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderUserComponent,
    FooterUserComponent,
    AboutpageComponent,
    LoginuserComponent,
    RegistrationuserComponent,
    ForgetpassComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
