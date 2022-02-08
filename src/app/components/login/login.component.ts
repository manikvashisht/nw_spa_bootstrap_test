import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  userName: string="";
  password: string="";
  isInvalidPassword: boolean = false;

  constructor(private auth: AuthorizationService) {}

  ngOnInit(): void {}

  handleLogin() {
    console.log('Intial Pass : ' + this.isInvalidPassword);
    this.isInvalidPassword = this.auth.authenticateUser(
      this.userName,
      this.password
    );
    console.log('After Pass : ' + this.isInvalidPassword);
  }
}
