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
    this.contactsService.getFriendsId().subscribe()
    this.contactsService.usersFrends.subscribe((data)=>{
      this.usersFriends = data
    })
    
    // .pipe(
    //   finalize(()=>{
    //     this.contactsService.usersFrends.subscribe((data)=>{
    //       this.usersFriends = data;
    //     })
    //   })
    // )
    // .subscribe((data) => {
    //   this.contactsService.usersFrends.next(data)
    //   //  this.usersFriends = data.value;
    //   // console.log('this.friends', this.friends)
    // })

  }

  showContsctList() {
    this.isShow = !this.isShow ? true : false;
  }

  onInputChange(value) {
    this.newArr = [];
    this.friends.forEach((item) => {
      // console.log('this.friends', this.friends)
      let finde = item.name.toLowerCase().includes(value);
      if (finde) {
        this.newArr.push(item)
      }
    })
  }

}
