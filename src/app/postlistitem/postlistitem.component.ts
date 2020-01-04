import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
})
export class PostlistitemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;
  @Input() index: number;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  getLoveIts() {
    return this.loveIts;
  }
  onAddLoveIts(index: number) {
    this.postService.addLoveIts(index)
  }

  onSubstractLoveIts(index: number) {
    this.postService.substractLoveIts(index)
  }

  onDeletePost(index: number){
    this.postService.removePost(index);
  }

  onGetLoveIts(index: number){
    this.postService.getLoveIts(index);
  }

}
