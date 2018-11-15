import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Backend URL
  private _registerUrl = 'http://localhost:5000/api/register';
  private _loginUrl = 'http://localhost:5000/api/login';

  constructor(private http: HttpClient) { }

  // function that makes post request to the register url passing in the userdata to backend and returning response
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  // login request to the backend
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
}
