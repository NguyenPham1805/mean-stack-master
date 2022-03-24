import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { currentUserSelector } from 'src/app/core/store/user.selector';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store
      .select(currentUserSelector)
      .pipe(map((currentUser) => !!currentUser));
  }
}
