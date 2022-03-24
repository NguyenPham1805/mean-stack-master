import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { currentUserSelector } from 'src/app/core/store/user.selector';
import { PostService } from 'src/app/shared/service/post.service';
import { Post } from 'src/app/shared/types/post.interface';
import { CurrentUser } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'eye-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public userSubscription$!: Subscription;
  public currentUser$: Observable<CurrentUser | null> = of(null);
  public postsUser$: Observable<Post[] | null> = of(null);
  public postEdit: Post | null = null;
  public postFormDisplay: boolean = false;

  constructor(private postService: PostService, private store: Store) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.select(currentUserSelector);
    this.fetchPostsUser();
  }

  ngOnDestroy(): void {
    this.userSubscription$.unsubscribe();
  }

  public fetchPostsUser(): void {
    this.userSubscription$ = this.currentUser$
      .pipe(
        tap((currentUser) => {
          this.postsUser$ = this.postService.getPostsUser(
            currentUser?.accessToken!,
            currentUser?._id!
          );
        })
      )
      .subscribe();
  }

  public handleClickEdit(post: Post): void {
    this.postEdit = post;
    this.postFormDisplay = true;
  }

  public handleDeletePost(id: string): void {
    this.userSubscription$ = this.currentUser$
      .pipe(
        switchMap((currentUser) => {
          return this.postService.deletePost(currentUser?.accessToken!, id);
        })
      )
      .subscribe(() => this.fetchPostsUser());
  }
}
