import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { ContactData } from '../../shared/models/contact-data.model';
import { ContactsService } from 'src/app/shared/services/contacts-service/contacts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  $user = this.authService.user;

  userClick: ContactData;
  id: string;
  users = [];
  usersNewArr = [];
  isFiended = false;
  isClickUser = false;

  constructor(public authService: AuthService, private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getUsersData().subscribe((data) => {
      data.forEach(i => {
        const data: any = Object.entries(i);
        const userId = data[0][1];
        const userName = `${data[1][1].firstName} ${data[1][1].secondName}`;
        const userFoto = `${data[1][1].foto}`;
        const userData = { userId, userName, userFoto };
        this.users.push(userData);
      })
    })
  }

  onEvent(value) {
    if(value){
      this.usersNewArr = [];
    this.users.forEach((item) => {
      let finde = item.userName.toLowerCase().includes(value);
            if (finde) {
        this.usersNewArr.push(item)
        this.isFiended = true;
      }
    })
  }
  }

  onUserClick(id){
    this.id = null;
    this.id = id
    this.isFiended = false;
    this.authService.getSignUser(id)
    .subscribe((user) => {
      if(user){
        this.isClickUser = true;
        this.userClick = user;
      }
    })
  }

  onAddUser(){
    this.isClickUser = false;
    this.contactsService.addFriend(this.id).subscribe((data) => {
      if(data){
        this.contactsService.getFriendsId().subscribe();
      }
    })
  }



}
