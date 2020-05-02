import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../shared/services/friends/friends.service';
import { Friend } from 'src/app/shared/models/friend.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  friends: Friend[];
  
  constructor(private friendService: FriendsService) { }

  ngOnInit(): void {
    this.friends = this.friendService.myFriends
    console.log('this.friends', this.friends)
    
  }

}
