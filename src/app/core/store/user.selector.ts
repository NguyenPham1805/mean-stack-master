import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/shared/types/user.interface';

const userFeatureSelector = createFeatureSelector<UserState>('user');

export const currentUserSelector = createSelector(
  userFeatureSelector,
  (userState: UserState) => userState.user
);

export const userStatusSelector = createSelector(
  userFeatureSelector,
  (userState: UserState) => userState.status
);

export const errorsSelector = createSelector(
  userFeatureSelector,
  (userState: UserState) => userState.errors
);
