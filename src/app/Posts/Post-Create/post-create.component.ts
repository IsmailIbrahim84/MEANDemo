import { Component, Output, EventEmitter } from '@angular/core';
import { post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.Component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<post>();

  onAddPost()
  {
   const post: post =  {
     title: this.enteredTitle,
    content: this.enteredContent
  };
   this.postCreated.emit(post);
  }

}
