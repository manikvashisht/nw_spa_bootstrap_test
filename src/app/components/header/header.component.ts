import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  
  constructor(private router: Router,
    public authService: AuthorizationService) {}

  ngOnInit(): void {
  }

  handleLogout() {
    sessionStorage.removeItem('authorizedUser');
    this.router.navigate(['']);
  }

}
