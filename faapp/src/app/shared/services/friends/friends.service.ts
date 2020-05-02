import { Injectable } from '@angular/core';
import { Friend } from '../../models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private _myFriends: Friend[] = [
    new Friend(1, 'Wife', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsGQavsQlBgkfWbOECtiEwnGwlTOO5TWjbazN36vPHGNxxOFMd&usqp=CAU'),
    new Friend(2, 'Natallia Trus', 'https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300'),
    new Friend (3, 'Pilieo', 'https://lh3.googleusercontent.com/proxy/oNKnyvM-nEBbJ8jzVXPaEuJKtzgDDnTNiHYlHBVClRuwVb27gjXbfX1-_nYfNT-F83c94SsEJIZEykgN7QLKNfZGF-ow1sCcCvhVSpHhFoBOnRiSGyAPXw'),
    new Friend (4, 'Lorka', 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png'), 
    new Friend(5, 'Zmicer Kniazuk', 'https://i.pinimg.com/originals/0f/94/6d/0f946df6d767c5f3aa2664d2f4859ea2.png')
  ]

  get myFriends() {
    return this._myFriends;
  }
  constructor() { }
}
 