import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit, OnDestroy {
  posts: Post[];
  postSubscribe: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscribe = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.postService.getPosts();
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscribe.unsubscribe();
  }


  
}
