import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // empty object that takes in user data from the UI
  registerUserData = {};

  // inject authentication service
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  // submit user function that sends user data to auth service
  // the details are returned as an observerable and we subscribe to it
  submitUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );
  }

}
