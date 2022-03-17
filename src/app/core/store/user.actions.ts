import { createAction, props } from '@ngrx/store';

export enum RegisterAction {
  REGISTER = '@User/Register',
  REGISTER_SUCCESS = '@User/RegisterSuccess',
  REGISTER_FAILED = '@User/RegisterFailed',
}

export enum SignInAction {
  SIGN_IN = '@User/SignIn',
  SIGN_IN_SUCCESS = '@User/SignInSuccess',
  SIGN_IN_FAILED = '@User/SignInFailed',
}

export enum SignOutAction {
  SIGN_OUT = '@User/SignOut',
  SIGN_OUT_SUCCESS = '@User/SignOutSuccess',
  SIGN_OUT_FAILED = '@User/SignOutFailed',
}

export const signIn = createAction(
  SignInAction.SIGN_IN,
  props<{ username: string; password: string }>()
);
