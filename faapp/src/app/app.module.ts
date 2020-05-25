import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './sidebar/profile/profile.component';
import { SearchComponent } from './header/search/search.component';
import { SearchInputComponent } from './header/search/search-input/search-input.component';
import { SearchBtnComponent } from './header/search/search-btn/search-btn.component';
import { MessagesComponent } from './sidebar/messages/messages.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HideDirective } from './shared/directives/hide.directive';
import { EmailPhoneValidatorDirective } from './shared/validation/email-phone-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    SearchComponent,
    SearchInputComponent,
    SearchBtnComponent,
    MessagesComponent,
    ContentComponent,
    SignUpComponent,
    HideDirective,
    EmailPhoneValidatorDirective,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
