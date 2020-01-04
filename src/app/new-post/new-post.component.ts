import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postformGroup: FormGroup;
  constructor(private postService: PostService, private postformBuilder: FormBuilder, private router: Router) { }
  post: Post;
  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postformGroup = this.postformBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }
  onCreateNewPost(){
    const title = this.postformGroup.get('title').value;
    const content = this.postformGroup.get('content').value;
    const newPost = new Post(title, content);
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
    
  }

}
