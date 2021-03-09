import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { post } from "./post.model";

@Injectable ({providedIn: 'root'})
export class PostService{
  private posts : post[] = [];
  private postUpdated = new Subject<Post[]>();

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
    this.postUpdated.next([...this.posts]);

  }
  getUpdatedListener()
  {
    return this.postUpdated.asObservable();
  }
}
