import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 @Input() post = [];
  // post = [
  //   {title:"First Post",content:"This is the fist post."},
  //   {title:"Second Post",content:"This is the second post."},
  //   {title:"Thrid Post",content:"This is the third post."},
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
