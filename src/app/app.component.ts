import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit, inject } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  private auth = inject(SocialAuthService);

  user?: SocialUser;
  loggedIn?: boolean;

  ngOnInit(): void {
    this.auth.authState
      .pipe(map(user => {
        this.user = user;
        this.loggedIn = (user != null);
        console.log(user);
      }))
      .subscribe()
  }

  signOut(): void {
    this.auth.signOut();
  }

}
