import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatAcount,loginData } from '../constans/DTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient){}
  
 

CreateUser(maill:CreatAcount) {
 return this.http.post('https://crud-env.up.railway.app/auth/createAccount' ,maill)

  }

  Login(userLogin:loginData){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://crud-env.up.railway.app/auth/login',userLogin,{ headers })
  }
}
