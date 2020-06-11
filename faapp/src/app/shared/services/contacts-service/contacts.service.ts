import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ContactData } from '../../models/contact-data.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  usersData: ContactData[] = [];

  myFriendsId: any[] = [];

  usersFrends: BehaviorSubject<ContactData[]> = new BehaviorSubject<ContactData[]>(null);


  private _myFriends: ContactData[] = [];

  users: ContactData[] = [];

  myFriends = [];
  contactValue: ContactData


  constructor(private http: HttpClient, private authService: AuthService) { }

  getUsersData(): Observable<any> {
    return this.http.get(`${CONFIG.server}/userData.json`)
      .pipe(
        map((data) => {
          const usersData = [];
          for (let key in data) {
            usersData.push({ key, ...data[key] });
          }
          this.usersFrends.next(this._myFriends);
          return this.usersData = usersData;
        })
      )
  }


  addFriend(id) {
    return this.http.post(`${CONFIG.server}/friends/${localStorage.getItem('faappLog')}.json`, { userId: id })
      .pipe(
        tap(data => {
          if (data) {
            this.myFriendsId.push(id)
          }
          console.log('dataaddfr', data)
        })
      )
  }


  getFriendsId(): Observable<any> {
    return this.http.get(`${CONFIG.server}/friends/${localStorage
      .getItem(`${CONFIG.localStorageId}`)}.json`)
      .pipe(
        map((data) => {
          const usersArr = [];
          for (let key in data) {
            usersArr.push({ key, ...data[key] });
          }
          this.users = [];
          this.usersData.forEach(i => {
            const data: any = Object.entries(i);
            const id = `${data[0][1]}`;
            const firstName = `${data[1][1].firstName}`;
            const secondName = `${data[1][1].secondName}`;
            const dayBth = `${data[1][1].dayBth}`;
            const monthBth = `${data[1][1].monthBth}`;
            const yearBth = `${data[1][1].fyearBth}`;
            const foto = `${data[1][1].foto}`;
            const emailPhone = `${data[1][1].email}`;
            const gender = `${data[1][1].gender}`;
            const userData = { id, firstName, secondName, dayBth, monthBth, yearBth, foto, emailPhone, gender };
            this.users.push(userData);
          })
          let arrTemp = []
          this.users.forEach(item => {

            usersArr.forEach(i => {
              if (item.id === i.userId) {
                arrTemp.push(item)
              }
            })
          })
          this.usersFrends.next(arrTemp);
        })
      )
  }

  // getUser(userId): Observable<any> {
  //   return this.http.get(`${CONFIG.server}/userData/${userId}.json`)
  //     .pipe(
  //       map((data: ContactData) => {
  //         let contactData = [];
  //         for (let key in data) {
  //           contactData.unshift({ id: key, ...data[key] });
  //         }
  //         debugger
  //         const dataContact = contactData[0];
  //         console.log('dataContact', dataContact)
  //         // this.userData.next(dataUser);
  //         this.contactValue = dataContact.getValue();
  //         console.log('this.contactValue', this.contactValue)
  //         // console.log('this.userData', this.userData)
  //         return dataContact;
  //       })
  //     )
  // }


  // filterFrend(usersArr){
  //   this.usersData.forEach(i => {
  //     const data: any = Object.entries(i);
  //     const id = data[0][1];
  //     const name = `${data[1][1].firstName} ${data[1][1].secondName}`;
  //     const image = `${data[1][1].foto}`;
  //     const userData = { id, name, image };
  //     // console.log('userData', userData)
  //     const users = [];
  //     debugger
  //     // this.users.push(userData);
  //     // console.log('users', users)
  //   })

  //   usersArr.forEach(i => {
  //     debugger
  //     i.userId
  //     this._myFriends.forEach(item => {
  //       if(String(item.id) === String(item.id)){
  //         const myContact = [];
  //         myContact.push(item);
  //         // console.log('myContact', myContact)
  //       }
  //     })
  //   })



  // }



}
