import { Component, OnInit, ViewChild } from '@angular/core';
import { MyPostsService } from '../shared/services/my-posts/my-posts.service';
import { Post } from '../shared/models/post.model';
import { NgForm } from '@angular/forms';
import { CONFIG } from './../shared/config';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { ContactData } from '../shared/models/contact-data.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('form', { static: true }) formPost: NgForm;

  posts: Post[] = [];
  post: any;
  showInputAria = false;
  imageSrc: any;
  image: any;
  $user = this.authSevice.user;
  userData: ContactData;
  postClick: Post;
  nameFile: string;
  urlImg: any

  constructor(private myPostService: MyPostsService,
        public authSevice: AuthService, private router: Router, ) { }


  ngOnInit(): void {
    if (localStorage.getItem(`${CONFIG.localStorageId}`)) {
      this.authSevice.autoLogIn();
      this.authSevice.getSignUser(localStorage.getItem(`${CONFIG.localStorageId}`))
        .subscribe(user => this.userData = user)


      this.myPostService.getPosts().subscribe((data: Post[]) => {
        this.posts = data;
      })
    } else this.router.navigate(['/log-in'])
  }


  onFormPostSubmit(form: NgForm) {
    this.post = {
      postDate: Date.now(),
      postDescription: form.value.postDescription,
      postFile: this.imageSrc,
      likeCount: 0,
    }
    this.myPostService.addPost(this.post).subscribe()
    this.isHideAria()
  }

  isHideAria() {
    this.showInputAria = false;
    if (this.imageSrc) {
      this.imageSrc = !this.imageSrc;
    }
    return false
  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((e) => {
        this.imageSrc = e.target['result'];
        this.image = event.target.files[0];
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onRemoveImg(){
    this.imageSrc = null;
  }



}
