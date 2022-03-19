import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eye-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  public likeCheck: boolean = false;
  public likeCount: number = 33;

  constructor() {}

  ngOnInit(): void {}

  handleToggleLike() {
    this.likeCheck = !this.likeCheck;
    this.likeCheck ? ++this.likeCount : --this.likeCount;
  }
}
