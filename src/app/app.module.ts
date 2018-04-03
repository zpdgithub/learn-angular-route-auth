import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

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
  template: `(app-root)`,
})
export class AppComponent {
}


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
    BrowserModule
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
