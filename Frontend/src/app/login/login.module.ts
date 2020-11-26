import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from './login.component';
import {LoginService } from './login-service';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [  LoginComponent , RegisterComponent ],
  imports: [CommonModule ,HttpClientModule , FormsModule
    
  ],
  providers: [LoginService],
  exports:[   LoginComponent , RegisterComponent]
})
export class LoginModule { }
