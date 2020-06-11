import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs';
import { MyPostsService } from './my-posts.service';

@Injectable({
  providedIn: 'root',
})

export class MyPostResolver implements Resolve<Post[]>{

  constructor(private myPostService: MyPostsService){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.myPostService.getPosts(

    )
  }




}