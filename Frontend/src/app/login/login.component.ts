import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login-service';
import { Login } from './login';
@Component({
  selector: 'get-login',
  templateUrl: './login.component.html'
  
})
export class LoginComponent implements OnInit {

 // login:Login=new Login('','','',0,'');
public login : any={};
public showMsg: boolean = false;
public showMsg1: boolean = false;
   constructor(private router: Router, private loginService: LoginService) { }
 

  getLogin(){
     //this.loginService.getLogin(this.login.userId,this.login.password).subscribe(data => this.login=data );
     if((this.login.userId =='vishal'|| this.login.userId =='aditya'|| this.login.userId =='teja' || this.login.userId =='atul' || this.login.userId =='shahid' ) && this.login.password == 'ooad'){
      this.router.navigate(['/AdminHome']);
    }
    else if (this.login.userId && this.login.password) 
    {
      this.showMsg1 = false;
      this.showMsg = false;
      this.validate();
    } else {
      this.showMsg1 = true;
      this.showMsg = false;
    }
  }
  
  ngOnInit(){
    
  }

 validate() {
    this.loginService.getLogin(this.login.userId, this.login.password).subscribe((res: any) => {
      console.log('The user obj is ',res);
      this.loginService.getLogin = res;
       /*if (this.login.role == 'admin')*/ {
        this.showMsg = false;
        this.showMsg1 = false;
        this.router.navigate(['/User']);
 
      }
    },
      (error) => {
        this.showMsg = true;
        this.showMsg1 = false;
        this.router.navigate(['/http://localhost:4200']);
      }
    );
  }

}
