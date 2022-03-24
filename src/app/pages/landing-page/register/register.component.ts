import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { registerAction } from 'src/app/core/store/actions/userRegister.actions';
import {
  errorsSelector,
  userStatusSelector,
} from 'src/app/core/store/user.selector';
import { UserState } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'eye-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public isSubmit$: Observable<'idle' | 'loading' | 'error'> = of('idle');
  public errorsSignIn$: Observable<String[] | null> = of(null);
  public hide: boolean = true;
  public rgForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<UserState>) {}

  ngOnInit(): void {
    this.rgForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      displayName: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.store.dispatch(registerAction({ userRegister: this.rgForm.value }));
    this.isSubmit$ = this.store.select(userStatusSelector);
    this.errorsSignIn$ = this.store.select(errorsSelector);
  }
}
