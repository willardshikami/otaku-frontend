import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //register URL 
  private _registerUrl = "http://localhost:5000/api/register"

  constructor(private http: HttpClient) { }

  //function that makes post request to the register url passing in the userdata to backend and returning response
  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }
}
