import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class MyPostsService {

  private _myPosts: Post[] = [
    new Post('https://i.ytimg.com/vi/Xl3uvmIiqFw/maxresdefault.jpg', '01.02.2020', 'this ia Sun', 1),
    new Post('https://avatanplus.com/files/effects/mid/57446cd4bd5e9154e3491f28.jpg', '02.02.2020', 'It`s galasy', 2),
  ]

  get myPosts(){
    return this._myPosts;
  }
  constructor() { }
}
