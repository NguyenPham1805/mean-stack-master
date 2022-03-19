import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'eye-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  scrollSubscription$!: Subscription;
  public isSearchHide: boolean = true;
  public navbarChage: boolean = false;

  @ViewChild('searchRef') searchRef!: ElementRef;

  constructor() {}
  ngOnDestroy(): void {
    this.scrollSubscription$.unsubscribe();
  }

  ngOnInit(): void {
    this.scrollSubscription$ = fromEvent(window, 'scroll').subscribe(() => {
      this.scrollNavbar();
    });
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
}
