import { Component, Input, OnInit } from '@angular/core';
import { post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 @Input() post: post[] = [];
  // post = [
  //   {title:"First Post",content:"This is the fist post."},
  //   {title:"Second Post",content:"This is the second post."},
  //   {title:"Third Post",content:"This is the third post."},
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
