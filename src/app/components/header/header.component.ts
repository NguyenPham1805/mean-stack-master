import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { signOutAction } from 'src/app/core/store/actions/userSignOut.action';
import { currentUserSelector } from 'src/app/core/store/user.selector';
import { CurrentUser } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'eye-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private scrollSubscription$!: Subscription;
  private userSubsciption$!: Subscription;

  public currentUser: CurrentUser | null = null;
  public isSearchHide: boolean = true;
  public navbarChage: boolean = false;

  @ViewChild('searchRef') searchRef!: ElementRef;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.scrollSubscription$ = fromEvent(window, 'scroll').subscribe(() => {
      this.scrollNavbar();
    });

    this.store.select(currentUserSelector).subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.scrollSubscription$.unsubscribe();
  }

  scrollNavbar() {
    if (window.pageYOffset > 0) this.navbarChage = true;
    else this.navbarChage = false;
  }

  handleSearchDisplay(e: Event): void {
    if (this.isSearchHide) {
      e.preventDefault();
      this.searchRef.nativeElement.focus();
    }
    this.isSearchHide = !this.isSearchHide;
  }

  handleSignOut() {
    this.store.dispatch(
      signOutAction({ accessToken: this.currentUser?.accessToken as string })
    );
  }
}
