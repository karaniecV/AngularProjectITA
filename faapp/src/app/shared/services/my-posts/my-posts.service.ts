import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from './../../config';
import { map, take, exhaustMap, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MyPostsService {

  private _posts: Post[] = [];

  private _listChange: BehaviorSubject<any> = new BehaviorSubject<any>(this._posts);

  imgUrl: any;

  get posts() {
    return this._listChange.asObservable();
  }


  constructor(private http: HttpClient,
     public authService: AuthService,
     private storage: AngularFireStorage) { }

  addPost(post) {
    return this.http.post(`${CONFIG.server}/posts/${localStorage
      .getItem(`${CONFIG.localStorageId}`)}.json`, post)
      .pipe(
        tap((data: { name: string }) => {
          this._posts.unshift({ id: data.name, ...post })
        })
      )
  }

  updatePost(id, post) {
    return this.http.put(`${CONFIG.server}/posts/${localStorage
      .getItem(`${CONFIG.localStorageId}`)}/${id}.json`, post)
      .pipe(
        tap(() => {
        })
      )
  }


  getPosts(): Observable<Post[]> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user: User) => {
        return this.http.get(`${CONFIG.server}/posts/${localStorage
          .getItem(`${CONFIG.localStorageId}`)}.json`);
      }),
      map((data) => {
        const posts = [];
        for (let key in data) {
          posts.unshift({ id: key, ...data[key] });
        }
        this._posts = posts;
        return this._posts;
      })
    )
  }

  deletePost(id) {
    return this.http.delete(`${CONFIG.server}/posts/${localStorage
      .getItem(`${CONFIG.localStorageId}`)}/${id}.json`)
      .pipe(
        tap((data) => {
          console.log('data', data)
          return data;
        })
      )
  }

  deletePostArr(id) {
    this._posts = this._posts.filter(item => !id.includes(item));
    return this._posts;
  }

  getPostId(id: string) {
    const post = this._posts.find(
      (p) => {
        return String(p.id) === String(id);
      }
    );
    return post
  }

}
