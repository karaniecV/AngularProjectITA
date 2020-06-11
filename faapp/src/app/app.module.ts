import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './sidebar/profile/profile.component';
import { SearchComponent } from './header/search/search.component';
import { MessagesComponent } from './sidebar/messages/messages.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmailPhoneValidatorDirective } from './shared/validation/email-phone-validator.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactsComponent } from './contacts/contacts.component';
import { Focus1Directive } from './shared/directives/focus1.directive';
import { Focus2Directive } from './shared/directives/focus2.directive';
import { ErrorsComponent } from './shared/errors/errors.component';
import { ErrorInterceptor } from './shared/errors/error.interceptor';
import { LogInComponent } from './log-in/log-in.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { PostComponent } from './content/post/post.component';
// import { LogInterceptor } from './shared/interceptors/log.interceptor';
// import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { environment } from '../environments/environment';
import { ContactsService } from './shared/services/contacts-service/contacts.service';
import { SingleContactComponent } from './contacts/single-contact/single-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    SearchComponent,
    MessagesComponent,
    ContentComponent,
    SignUpComponent,
    Focus2Directive,
    EmailPhoneValidatorDirective,
    ContactsComponent,
    Focus1Directive,
    ErrorsComponent,
    LogInComponent,
    LoaderComponent,
    PostComponent,
    SingleContactComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [
    [ContactsService],
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: BUCKET, useValue: 'gs://faapp-80000.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
