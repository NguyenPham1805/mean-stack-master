import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  CurrentUser,
  UserRegister,
  UserResponse,
  UserSignIn,
} from '../types/user.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public register(user: UserRegister): Observable<CurrentUser> {
    return this.http
      .post<UserResponse>(`${environment.eyebookApiUrl}/auth/register`, user, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(map((response: UserResponse) => response.currentUser));
  }

  public signIn(userSignIn: UserSignIn): Observable<CurrentUser> {
    return this.http
      .post<UserResponse>(
        `${environment.eyebookApiUrl}/auth/sign-in`,
        userSignIn,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .pipe(map((response: UserResponse) => response.currentUser));
  }

  public signOut(accessToken: string) {
    return this.http.post(
      `${environment.eyebookApiUrl}/auth/sign-out`,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  }
}
