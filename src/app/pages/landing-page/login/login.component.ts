import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { signInAction } from 'src/app/core/store/actions/userSignIn.action';
import {
  errorsSelector,
  userStatusSelector,
} from 'src/app/core/store/user.selector';
import { UserState } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'eye-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public isSubmit$: Observable<'idle' | 'loading' | 'error'> = of('idle');
  public errorsSignIn$: Observable<String[] | null> = of(null);
  public rfSignIn!: FormGroup;

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.rfSignIn = new FormGroup({
      emailOrUsername: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.store.dispatch(signInAction({ userSignIn: this.rfSignIn.value }));
    this.isSubmit$ = this.store.select(userStatusSelector);
    this.errorsSignIn$ = this.store.select(errorsSelector);
  }
}
