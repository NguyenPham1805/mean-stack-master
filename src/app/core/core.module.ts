import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { userReducer } from 'src/app/core/store/user.reducer';
import { UserEffect } from 'src/app/core/store/user.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffect]),
  ],
})
export class CoreModule {}
