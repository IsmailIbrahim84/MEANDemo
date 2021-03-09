import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.Component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  // @Output() postCreated = new EventEmitter<post>();

constructor (public postService: PostService){}

  onAddPost(form:NgForm)
  {
    if (form.invalid)
    {
      return;
    }
  //  const post: post =  {
  //   //  title: this.enteredTitle,
  //   // content: this.enteredContent
  //   title: form.value.title,
  //   content: form.value.content
  // };
  //  this.postCreated.emit(post);
this.postService.addPost(form.value.title,form.value.content);
form.reset();
  }

}
