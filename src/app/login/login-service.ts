import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
import { Injectable } from '@angular/core';
import { Router}  from '@angular/router';
@Injectable({
   providedIn:'root'
})
export class LoginService
{
  
   public constructor(private httpClient:HttpClient,private router:Router){ }
   
   public getLogin(userId:string,password:string)  : Observable<Login>     //Observable<Login>
   {
      return this.httpClient.get<Login>('http://localhost:8091/login/' +userId + '/' + password);
     
    
      
   }
   public register(login:Login) : any
   {
       return this.httpClient.post<any>('http://localhost:8091/register',login);
      
   }
  
   }
  
   
