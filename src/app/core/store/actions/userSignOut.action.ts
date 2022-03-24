import { createAction, props } from '@ngrx/store';

export enum SignOutAction {
  SIGN_OUT = '@User/SignOut',
  SIGN_OUT_SUCCESS = '@User/SignOutSuccess',
  SIGN_OUT_FAILED = '@User/SignOutFailed',
}

export const signOutAction = createAction(
  SignOutAction.SIGN_OUT,
  props<{ accessToken: string }>()
);

export const signOutSuccesstAction = createAction(
  SignOutAction.SIGN_OUT_SUCCESS
);

export const signOutFailedAction = createAction(
  SignOutAction.SIGN_OUT_FAILED,
  props<{ errors: string[] }>()
);
