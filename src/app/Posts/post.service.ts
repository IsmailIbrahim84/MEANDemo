import { Injectable } from "@angular/core";
import { post } from "./post.model";

@Injectable ({providedIn: 'root'})
export class PostService{
  private posts : post[] = [];

  getPosts(){
    // return [...this.posts]
    return this.posts;
  }

  addPost(title: string,content: string)
  {
    const post: post =  {
      title: title,
      content: content
    };

    this.posts.push(post);

  }
}
