import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private userService: UserService,  private router: Router) {}


  register(username: string, email: string, password: string) {
    this.userService.register({ username, email, password })
      .pipe(
        tap(
          (response) => {
            alert('Registration Successful');
            this.router.navigate(['/login']);
          },
          (error) => {
            alert('Registration Failed: ' + error.message);
          }
        )
      )
      .subscribe();
  }
  
}

