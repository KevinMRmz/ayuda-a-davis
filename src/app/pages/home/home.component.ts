import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  email: string;

  constructor(private authService: AuthService) {
    this.email = this.authService.user?.email!;
  }
}
