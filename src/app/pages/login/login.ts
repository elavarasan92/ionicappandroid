import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public httpClient: HttpClient,
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
    console.log("Form is valid");
    this.sendPostRequest();
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  sendPostRequest() {
    console.log("apiUrl : "+environment.apiUrl);
const httpOptions = {
  headers: new HttpHeaders({
  'Accept': 'application/json',
    'Content-Type':  'application/json'
    })
  };
    let postData = {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
    }

    this.httpClient.post(environment.apiUrl+"login", postData, httpOptions)
      .subscribe(data => {
        console.log(JSON.stringify(data));
       }, error => {
        console.log(error);
      });
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
