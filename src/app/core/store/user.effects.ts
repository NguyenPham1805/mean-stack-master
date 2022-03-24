import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CurrentUser } from 'src/app/shared/types/user.interface';
import {
  registerAction,
  registerFailedAction,
  registerSuccessAction,
} from './actions/userRegister.actions';
import {
  signInAction,
  signInFailedAction,
  signInSuccessAction,
} from './actions/userSignIn.action';
import {
  signOutAction,
  signOutFailedAction,
  signOutSuccesstAction,
} from './actions/userSignOut.action';

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ userRegister }) => {
        return this.authService.register(userRegister).pipe(
          map((currentUser: CurrentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          tap(() => this.router.navigate(['/post'])),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailedAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    );
  });

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInAction),
      switchMap(({ userSignIn }) => {
        return this.authService.signIn(userSignIn).pipe(
          map((currentUser: CurrentUser) => {
            return signInSuccessAction({ currentUser });
          }),
          tap(() => this.router.navigate(['/post'])),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              signInFailedAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    );
  });

  signOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signOutAction),
      switchMap(({ accessToken }) => {
        return this.authService.signOut(accessToken).pipe(
          map(() => signOutSuccesstAction()),
          tap(() => this.router.navigate(['/login'])),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              signOutFailedAction({ errors: errorResponse.error.error })
            );
          })
        );
      })
    );
  });
}
