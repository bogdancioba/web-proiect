import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router) {}
  async login(email: string, password: string) {
    this.userService.login({ email, password }).subscribe(
      (response) => {
        alert('Login Successful');
        this.authService.login();
        this.router.navigate(['/']);
      },
      (error) => {
        console.error(error);
        alert('Login Failed: ' + error.message);
      }
    );
  }
  
}
