import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

/*
 * Components
 */
import { LoginComponent } from './components/LoginComponent';
import { ProtectedComponent } from './components/ProtectedComponent';

/*
 * Services
 */
import { AUTH_PROVIDERS } from './services/AuthService';

@Component({
  selector: 'app-root',
  template: `(app-root)`,
})
export class AppComponent {
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
