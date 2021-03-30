import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 @Input() post: post[] = [];
 postService: PostService;
 private postSubscription: Subscription;
  // post = [
  //   {title:"First Post",content:"This is the fist post."},
  //   {title:"Second Post",content:"This is the second post."},
  //   {title:"Third Post",content:"This is the third post."},
  // ]
  constructor(postService: PostService) {
    this.postService = postService;
   }

  ngOnInit() {
    this.postService.getPosts();
    this.postSubscription = this.postService.getUpdatedListener()
    .subscribe((posts: post[]) =>{ this.post = posts; });
  }

  ngOnDestory(){
    this.postSubscription.unsubscribe(); // To avoid memory leak.
  }

}
