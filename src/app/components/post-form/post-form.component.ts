import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/shared/service/post.service';
import { Post } from 'src/app/shared/types/post.interface';
import { CurrentUser } from 'src/app/shared/types/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'eye-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  public defaulImg: string = './assets/img/upload.png';
  public imageImageApiUrl: string = environment.eyePostImageApiUrl;

  private fileToUpload: any;

  @Input() currentUser!: CurrentUser;
  @Input() post: Post | null = null;

  @Output() onPostFormSubmit = new EventEmitter();
  @Output() onClose = new EventEmitter();
  @Output() onRefetch = new EventEmitter();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const fd = new FormData();
    fd.append('title', form.value.caption);
    fd.append('postImage', this.fileToUpload);
    this.postService
      .createPost(this.currentUser.accessToken!, fd)
      .subscribe((res) => {
        console.log(res);
        this.onClose.emit();
        this.onRefetch.emit();
      });
  }

  public handleChageFile(target: any) {
    this.fileToUpload = target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      this.defaulImg = e.target.result;
    };
    fileReader.readAsDataURL(this.fileToUpload);
  }

  public handleUpdatePost(form: NgForm): void {
    const fd = new FormData();
    fd.append('title', form.value.caption);
    fd.append('postImage', this.fileToUpload);
    this.postService
      .updatePost(this.currentUser?.accessToken!, this.post?.postId!, fd)
      .subscribe((res) => {
        console.log(res);
        this.onClose.emit();
        this.onRefetch.emit();
      });
  }
}
