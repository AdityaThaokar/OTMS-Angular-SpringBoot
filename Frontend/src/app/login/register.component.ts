import { Component , OnInit } from '@angular/core';
import { LoginService } from './login-service';
import { Login } from './login';
import { Router } from '@angular/router';
@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit
{
  login:Login=new Login('','','',0,'');
  acode:string="160A61";
   public constructor(private loginService:LoginService, private router: Router){}
   public register():void
   {
     if(this.login.userId && this.login.password && this.login.role)
      {
       if(this.login.role=='admin' || this.login.role=='Admin')
       {
         var code = prompt("Enter the admin verification code!");
         if(code==this.acode)
       {
       this.loginService.register(this.login).subscribe();
       alert("Registration Successful!");
       this.router.navigate(['/getlogin']);
       }
       else
       {
        alert("Verification code not matched / No verification code is mentioned!");
        alert("Session timeout! Resfresh and try again!");
       }
       }
       else
       {
        this.loginService.register(this.login).subscribe();
       alert("Registration Successful!");
       this.router.navigate(['/getlogin']);
       }
       }
       else
       {
        alert("Enter all the required fields!");
       }
     } 

   ngOnInit()
   {
      //this.getTest();
   }

}