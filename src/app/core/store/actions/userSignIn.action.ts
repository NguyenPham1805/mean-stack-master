import { createAction, props } from '@ngrx/store';
import { CurrentUser, UserSignIn } from 'src/app/shared/types/user.interface';

export enum SignInAction {
  SIGN_IN = '@User/SignIn',
  SIGN_IN_SUCCESS = '@User/SignInSuccess',
  SIGN_IN_FAILED = '@User/SignInFailed',
}

export const signInAction = createAction(
  SignInAction.SIGN_IN,
  props<{ userSignIn: UserSignIn }>()
);

export const signInSuccessAction = createAction(
  SignInAction.SIGN_IN_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const signInFailedAction = createAction(
  SignInAction.SIGN_IN_FAILED,
  props<{ errors: string[] }>()
);
