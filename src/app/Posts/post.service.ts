import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { post } from './post.model';
import {HttpClient} from '@angular/common/http';

@Injectable ({providedIn: 'root'})
export class PostService{
  private posts: post[] = [];
  private postUpdated = new Subject<post[]>();
constructor(private http: HttpClient) {
}
  getPosts(){
    // return [...this.posts]
    // return this.posts;
    this.http.get<{message: string, posts: post[]}>('http://localhost:3000/api/posts').subscribe((postData) => {
     this.posts = postData.posts;
     this.postUpdated.next([...this.posts]);
    });
  }

  addPost( title: string, content: string)
  {
    const post: post =  {
      id: null,
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
