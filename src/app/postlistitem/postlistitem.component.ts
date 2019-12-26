import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  getLoveIts() {
    return this.loveIts;
  }
  addLoveIts() {
    this.loveIts ++;
  }

  substractLoveIts() {
    this.loveIts--;
  }

}
