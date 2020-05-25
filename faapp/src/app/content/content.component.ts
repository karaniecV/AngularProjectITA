import { Component, OnInit } from '@angular/core';
import { MyPostsService } from '../shared/services/my-posts/my-posts.service';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  posts: Post[];

  constructor(private myPostService: MyPostsService) {}

  ngOnInit(): void {
    this.posts = this.myPostService.myPosts;
  }

  
}
