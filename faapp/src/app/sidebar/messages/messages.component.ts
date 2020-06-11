import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/shared/services/contacts-service/contacts.service';
import { ContactData } from 'src/app/shared/models/contact-data.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  friends: ContactData[];
  
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
      this.contactsService.usersFrends.subscribe(data=> this.friends = data)
      console.log('this.friends', this.friends)
    
  }

}
