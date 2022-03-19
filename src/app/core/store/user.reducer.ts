import { createAction, on } from '@ngrx/store';
import { UserState } from 'src/app/shared/types/user.interface';
import * as UserAction from 'src/app/core/store/user.actions';

const userState: UserState = {
  user: null,
  status: 'idle',
  error: '',
};

export const userReducer = (
  state: UserState | null = userState,
  action: UserAction.RegisterAction
) => {};
