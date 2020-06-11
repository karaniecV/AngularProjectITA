import { Injectable } from '@angular/core';
import { CONFIG } from './../../config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthResponse } from './../../models/auth.response';
import { ContactData } from '../../models/contact-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  userData: BehaviorSubject<ContactData> = new BehaviorSubject<ContactData>(null);

  userValue: ContactData;

  userId: string;

  userName: string;

  usersData: ContactData[];


  onSignUp(email: string, password: string) {
    return this.http.post(`${CONFIG.signUp}${CONFIG.apiKey}`, 
      { email, password, returnSecureToken: true })
      .pipe(
        tap((data: AuthResponse) => {
          this._loginHendler(data);

        })
      )
  }

  onLogin(email: string, password: string) {
    return this.http.post(`${CONFIG.signIn}${CONFIG.apiKey}`,
      { email, password, returnSecureToken: true })
      .pipe(
        tap((data: AuthResponse) => {
          this._loginHendler(data)

        })
      )
  }

  private _loginHendler(data: AuthResponse) {
    const expirationDate: Date = new Date(new Date().getTime() + Number(data.expiresIn) * 1000);
    const user: User = new User(data.email, data.localId, data.idToken, expirationDate);
    this.user.next(user);
    this.router.navigate([CONFIG.redirectUrl]);
    this.userId = user.id
    this.getSignUser(this.userId);
    localStorage.setItem(`${CONFIG.userLocalStorage}`, JSON.stringify(user))
    this.onLogLs(this.userId)
  }

  postSignUser(userData: ContactData) {
    return this.http.post(`${CONFIG.server}/userData/${this.userId}.json`, userData)
      .subscribe()

  }

  getSignUser(userId): Observable<any> {
    debugger
    return this.http.get(`${CONFIG.server}/userData/${userId}.json`)
      .pipe(
        map((data) => {
          const usersData = [];
          for (let key in data) {
            usersData.unshift({ id: key, ...data[key] });
          }
          const dataUser = usersData[0];
          this.userData.next(dataUser);
          this.userValue = this.userData.getValue();
          return this.userValue;
        })
      )
  }

  



  onLogOut() {
    this.user.next(null);
    // this.friendService.usersFrends.next(null)
    localStorage.removeItem(`${CONFIG.userLocalStorage}`)
    this.router.navigate([`${CONFIG.logInUrl}`])
    localStorage.removeItem(`${CONFIG.localStorageId}`)
  }

  onLogLs(id) {
    localStorage.removeItem(`${CONFIG.localStorageId}`);
    localStorage.setItem(`${CONFIG.localStorageId}`, id)
  }

  autoLogIn() {
    let user: {
      email: string,
      id: string,
      _token: string,
      _expirationDate: Date,
    }
    user = JSON.parse(localStorage.getItem(`${CONFIG.userLocalStorage}`));
    const loadedUser = new User(user.email, user.id, user._token, new Date(user._expirationDate))
    this.user.next(loadedUser);
  }

} 
