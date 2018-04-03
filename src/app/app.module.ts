import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';

/*
 * Components
 */
import { HomeComponent } from './components/HomeComponent';
import { AboutComponent } from './components/AboutComponent';
import { ContactComponent } from './components/ContactComponent';
import { LoginComponent } from './components/LoginComponent';
import { ProtectedComponent } from './components/ProtectedComponent';

/*
 * Services
 */
import { AUTH_PROVIDERS } from './services/AuthService';
import { LoggedInGuard } from './guards/loggedIn.guard';

@Component({
  selector: 'app-root',
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/about']">About</a>
        <a [routerLink]="['/contact']">Contact Us</a>
        <a [routerLink]="['/protected']">Protected</a>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">

      <login></login>

      <hr>

      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent {
  constructor(private router: Router) {
  }
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'protected', component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
