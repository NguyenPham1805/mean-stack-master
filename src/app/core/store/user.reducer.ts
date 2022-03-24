import { createReducer, on } from '@ngrx/store';
import { UserState } from 'src/app/shared/types/user.interface';
import * as RegisterAction from 'src/app/core/store/actions/userRegister.actions';
import * as SignOutAction from 'src/app/core/store/actions/userSignOut.action';
import * as SignInAction from 'src/app/core/store/actions/userSignIn.action';

const userState: UserState = {
  user: null,
  status: 'idle',
  errors: null,
};

export const userReducer = createReducer(
  userState,
  on(
    RegisterAction.registerAction,
    (state): UserState => ({ ...state, status: 'loading' })
  ),
  on(
    RegisterAction.registerSuccessAction,
    (_, action): UserState => ({
      status: 'idle',
      user: action.currentUser,
      errors: null,
    })
  ),
  on(
    RegisterAction.registerFailedAction,
    (state, action): UserState => ({
      ...state,
      status: 'error',
      errors: action.errors,
    })
  ),
  on(
    SignInAction.signInAction,
    (state): UserState => ({ ...state, status: 'loading' })
  ),
  on(
    SignInAction.signInSuccessAction,
    (_, action): UserState => ({
      user: action.currentUser,
      status: 'idle',
      errors: null,
    })
  ),
  on(
    SignInAction.signInFailedAction,
    (state, action): UserState => ({
      ...state,
      errors: action.errors,
      status: 'error',
    })
  ),
  on(
    SignOutAction.signOutAction,
    (state): UserState => ({ ...state, status: 'loading' })
  ),
  on(
    SignOutAction.signOutSuccesstAction,
    (): UserState => ({ user: null, status: 'idle', errors: null })
  ),
  on(
    SignOutAction.signOutFailedAction,
    (state, action): UserState => ({
      ...state,
      errors: action.errors,
      status: 'error',
    })
  )
);
