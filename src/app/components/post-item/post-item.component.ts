import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/shared/types/post.interface';
import { CurrentUser } from 'src/app/shared/types/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'eye-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  public likeCheck: boolean = false;
  public likeCount: number = 33;
  public postImageApiUrl = environment.eyePostImageApiUrl;

  @Input() post!: Post;
  @Input() user!: CurrentUser;

  @Output('delete-post') onDeletePost = new EventEmitter<string>();
  @Output('edit-post') onEditPost = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  public handleToggleLike() {
    this.likeCheck = !this.likeCheck;
    this.likeCheck ? ++this.likeCount : --this.likeCount;
  }
}
