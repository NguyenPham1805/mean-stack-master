import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, pluck, Subscription, switchMap, tap, zip } from 'rxjs';
import { currentUserSelector } from 'src/app/core/store/user.selector';
import { PostService } from 'src/app/shared/service/post.service';
// import { UserService } from 'src/app/shared/service/user.service';
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
  // public userInfo$: Observable<CurrentUser | null> = of(null);
  public postsUser$!: Observable<Post[]>;
  public postEdit: Post | null = null;
  public postFormDisplay: boolean = false;

  constructor(
    private postService: PostService,
    // private userService: UserService,
    // private activatedRoute: ActivatedRoute
    private store: Store
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.select(currentUserSelector);
    // this.userSubscription$ = zip(
    //   this.currentUser$,
    //   this.activatedRoute.params.pipe(pluck('id'))
    // )
    //   .pipe(
    //     tap(([currentUser, id]) => {
    //       this.userInfo$ = this.userService.getUserInfo(
    //         currentUser?.accessToken!,
    //         id
    //       );
    //     })
    //   )
    //   .subscribe();
    this.fetchPostsUser();
  }

  ngOnDestroy(): void {
    this.userSubscription$.unsubscribe();
  }

  public fetchPostsUser(): void {
    // this.userSubscription$ = zip(
    //   this.currentUser$,
    //   this.activatedRoute.params.pipe(pluck('id'))
    // )
    //   .pipe(
    //     tap(([currentUser, id]) => {
    //       this.postsUser$ = this.postService.getPostsUser(
    //         currentUser?.accessToken!,
    //         id
    //       );
    //     })
    //   )
    //   .subscribe();
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

  public handleCloseForm(): void {
    this.postEdit = null;
    this.postFormDisplay = false;
  }
}
