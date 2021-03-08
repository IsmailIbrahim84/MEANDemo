import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onAddPost(form:NgForm)
  {
    if (form.invalid)
    {
      return;
    }
   const post: post =  {
    //  title: this.enteredTitle,
    // content: this.enteredContent
    title: form.value.title,
    content: form.value.content
  };
   this.postCreated.emit(post);
  }

}
