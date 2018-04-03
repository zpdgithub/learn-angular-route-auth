import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';


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
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
