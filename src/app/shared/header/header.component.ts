import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _authservice: AuthService, private router: Router) {
    // this.token = localStorage.getItem('token') || '';
  }
  token!: string;
  isLoggedInState = this._authservice.getToken();
  // private Subscription! : any;

  setLogout() {
    localStorage.removeItem("token");
      this._authservice.setToken('');
      this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this._authservice.getToken().subscribe((d) => {
      this.token = d;
      // console.log(d);
      if (!d && !!localStorage.getItem('token')) {
        // console.log('checked', this._authservice.isLoggedIn());
        this.token = localStorage.getItem('token') || '';
        this._authservice.setToken(this.token);
      }
    });
  }
}
