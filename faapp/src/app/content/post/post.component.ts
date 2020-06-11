import { Component, OnInit, ViewChild } from '@angular/core';
import { MyPostsService } from '../../shared/services/my-posts/my-posts.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { CONFIG } from 'src/app/shared/config';
import { ContactData } from '../../shared/models/contact-data.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @ViewChild('form', { static: true }) formPost: NgForm;

  post: any;
  postId: string;
  showInputAria = false;
  imageSrc: any;
  image: any;
  user: ContactData;
  userName: string;
  likeCount: number;
  isDeleted = false;
  isDeletedOk: any;

  constructor(
    private myPostService: MyPostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem(`${CONFIG.localStorageId}`)) {
      this.authService.getSignUser(localStorage.getItem(`${CONFIG.localStorageId}`))
        .subscribe(user => this.userName = user.firstName)
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.postId = paramMap.get('id');
        this.post = this.myPostService.getPostId(this.postId);
        this.likeCount = this.post.likeCount
        this.imageSrc = this.post.postFile;
      });
    }
  }

  onDelete(postId) {
    const isDelete = confirm("Will you want delete this post?");
    if (isDelete) {
      this.myPostService.deletePost(postId)
      .subscribe(data => console.log(data))

    }
    //     { this.isDeletedOk = data })
    // }
    // if (this.isDeletedOk) {
      
    // }
    // setTimeout(() => {
    //   this.isDeleted = true;
    //   console.log('this.isDelete', this.isDeleted)
    // }, 2000)
    // console.log(data));
    // this.myPostService.getPosts().subscribe()
    //      )      this.myPostService.deletePostArr(postId)
    // this.router.navigate(['/'])
    this.isDeleted = true;

  }
  // this.isHideAria()


onChangePost(id, form: NgForm) {

  this.post = {
    postDate: Date.now(),
    postDescription: form.value.postDescription,
    postFile: this.imageSrc,
    likeCount: this.post.likeCount
  }
  this.myPostService.updatePost(id, this.post).subscribe(data => {
    if (data) {
      this.showInputAria = false;
      return this.post
    }

  })
  this.isHideAria()
}

// onFormPostSubmit(form: NgForm) {

// }

isHideAria() {
  this.showInputAria = false;
  this.router.navigate(['/'])
}

fileChange(event) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = ((e) => {
      this.imageSrc = null;
      this.imageSrc = e.target['result'];
      this.image = event.target.files[0];
    });
    reader.readAsDataURL(event.target.files[0]);
  }
}

onAddLike(post){
  this.likeCount = this.likeCount + 1;
  const newPost = {
    postDate: post.postDate,
    postDescription: post.postDescription,
    postFile: post.postFile,
    likeCount: this.likeCount,
  }
  this.myPostService.updatePost(post.id, newPost).subscribe()
  return this.likeCount
}
onRemoveImg(){
  this.imageSrc = null;
}


}
