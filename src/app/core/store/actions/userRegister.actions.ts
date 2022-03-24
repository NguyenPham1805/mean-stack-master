import { createAction, props } from '@ngrx/store';
import { CurrentUser, UserRegister } from 'src/app/shared/types/user.interface';

export enum RegisterAction {
  REGISTER = '@User/Register',
  REGISTER_SUCCESS = '@User/RegisterSuccess',
  REGISTER_FAILED = '@User/RegisterFailed',
}

export const registerAction = createAction(
  RegisterAction.REGISTER,
  props<{ userRegister: UserRegister }>()
);

export const registerSuccessAction = createAction(
  RegisterAction.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const registerFailedAction = createAction(
  RegisterAction.REGISTER_FAILED,
  props<{ errors: string[] }>()
);
