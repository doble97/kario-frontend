import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Response_From_Server } from 'src/app/entidades/response_from_server';
import { Login } from 'src/app/entidades/user';
import { userRegister } from 'src/app/entidades/userRegister';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url:string
  constructor(private http:HttpClient) {
    this.base_url = 'http://localhost:7777'
   }

  public doLogin(endpoint:string, user:Login):Observable<Response_From_Server>{
    let api_url = `${this.base_url}${endpoint}`
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type','application/json; charset=utf-8')
    return this.http.post<Response_From_Server>(api_url, user, {headers:headers})
      // .pipe(
      //   catchError(err=>{
      //     console.log(err)
      //     return throwError(()=>err)
      //   })
      // )
  }
  public doRegister(endpoint:string, user:userRegister){
    let api_url = `${this.base_url}${endpoint}`
    let headers = new HttpHeaders()
    headers= headers.set('Content-type','application/json; charset==utf-8')
    return this.http.post(api_url,user,{headers:headers})
  }
}
