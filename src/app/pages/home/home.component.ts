import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { currentUserSelector } from 'src/app/core/store/user.selector';
import { PostService } from 'src/app/shared/service/post.service';
import { Post } from 'src/app/shared/types/post.interface';
import { CurrentUser } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'eye-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostService],
})
export class HomeComponent implements OnInit, OnDestroy {
  public posts$!: Observable<Post[]>;
  public userSubscription$!: Subscription;
  public currentUser$: Observable<CurrentUser | null> = of(null);
  public postEdit: Post | null = null;
  public postFormDisplay: boolean = false;

  constructor(private postService: PostService, private store: Store) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.select(currentUserSelector);
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.userSubscription$.unsubscribe();
  }

  public getPosts(): void {
    this.userSubscription$ = this.currentUser$
      .pipe(
        tap((currentUser) => {
          this.posts$ = this.postService.getPosts(currentUser?.accessToken!);
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
      .subscribe(() => this.getPosts());
  }

  public handleCloseForm(): void {
    this.postEdit = null;
    this.postFormDisplay = false;
  }
}
