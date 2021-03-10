import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(data) {
    this.authenticationService.login(data)
      .subscribe(resp=> {
        console.log(resp.headers.get("Authorization"));
      },error => {
        console.log(error);
      })
  }
}
