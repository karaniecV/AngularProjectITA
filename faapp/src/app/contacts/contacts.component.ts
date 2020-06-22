import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/services/contacts-service/contacts.service';
import { ContactData } from '../shared/models/contact-data.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public usersFriends: ContactData[];

  friends = [];
  newArr: any[] = [];
  isShow = false;
  name = '';
  myFriendsId: any[] = [];



  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getFriendsId()
    .pipe(
      finalize(()=>{
        this.contactsService.usersFrends.subscribe((data)=>{console.log('gdhghge', data)
          this.usersFriends = data;
        })
      })
    )
    .subscribe((data) => { 
      this.contactsService.usersFrends.next(data)
       this.usersFriends = data.value;
    })

  }

  showContsctList() {
    this.isShow = !this.isShow ? true : false;
  }

  onInputChange(value) {
    this.newArr = [];
    this.usersFriends.forEach((item) => {
      let finde = item.firstName.toLowerCase().includes(value);
      if (finde) {
        this.newArr.push(item)
      }
    })
  }

}
