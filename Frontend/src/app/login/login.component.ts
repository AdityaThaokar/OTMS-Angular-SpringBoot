import { Component, OnInit } from '@angular/core';
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
   constructor(private router: Router, private loginService: LoginService) { }


  getLogin(){
     //this.loginService.getLogin(this.login.userId,this.login.password).subscribe(data => this.login=data );
    if (this.login.userId && this.login.password) 
    {
      this.validate();
    } else {
      alert("Either of UserId / Password is NULL");
    }
  }
  
  ngOnInit(){
    
  }
 /* getLogin(event)
  {
    event.preventDefault()
    const target = event.target
    const userId=target.querySelector('#userId').value
    const password=target.querySelector('#password').value
  
  this.login.getLogin(userId,password).subscribe(data => {
    if(data.success){
      this.router.navigate(['admin'])
      this.getLogin(true)
    }
    else{
      this.router.navigate(['/getlogin'])
      window.alert(data.message)
    }
    
  })
  console.log(userId,password)
}
}*/

 validate() {
    this.loginService.getLogin(this.login.userId, this.login.password).subscribe((res: any) => {
      console.log('The user obj is ',res);
      this.loginService.getLogin = res;
      if (this.login.userId == 'TxManiac' || this.login.userId == 'KavyaKopojju' || this.login.userId == 'CharitSahadev' || this.login.userId == 'RishithaLahari' ) {
        this.router.navigate(['/AdminHome']);
      } else /*if (this.login.role == 'admin')*/ {
        this.router.navigate(['/User']);
      }
    },
      (error) => {
        alert("invalid login credentials");
        this.router.navigate(['/http://localhost:4200']);
        /*var confirm = confirm("Click on 'OK' to register new details / Click on cancel to reach homepage");
        if(confirm==true)
        {
           this.router.navigate(['/register']);
        }
        else
        {
           this.router.navigate(['/http://localhost:4200']);
        }*/
      }
    );
  }

}
