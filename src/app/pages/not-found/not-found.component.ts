import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription, fromEvent, map } from 'rxjs';

@Component({
  selector: 'ms-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit, OnDestroy {
  @ViewChild('container') container!: ElementRef;
  private mousemoveEvents$!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.mousemoveEvents$ = fromEvent(document, 'mousemove')
      .pipe(map((e) => e as MouseEvent))
      .subscribe((e) => {
        let x = e.clientX / 2;
        let y = e.clientY / 2;
        this.container.nativeElement.style.backgroundPositionX = x + 'px';
        this.container.nativeElement.style.backgroundPositionY = y + 'px';
      });
  }

  ngOnDestroy(): void {
    this.mousemoveEvents$.unsubscribe();
  }
}
