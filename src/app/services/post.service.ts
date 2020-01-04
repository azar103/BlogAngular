import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../post';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
  postSubject = new Subject<Post[]>(); 
  constructor() { 
    this.getPosts()
  }
  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }
  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }
  getPosts(){
    firebase.database().ref('/posts').on('value', (data: Datasnapshot) =>{
      this.posts = data.val() ? data.val() : []
      this.emitPosts()
    })
  }
  addPost(post: Post){
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  removePost(index: number){
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }

  addLoveIts(index: number){
    this.posts[index].loveIts++;
    this.savePosts();
    this.emitPosts();
  }
  substractLoveIts(index: number){
    this.posts[index].loveIts--;
    this.savePosts();
    this.emitPosts();
  }

  getLoveIts(index: number){
    return this.posts[index].loveIts;
  }
}
