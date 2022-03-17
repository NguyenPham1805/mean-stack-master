import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public register(user: RegisterUser) {
    return this.http.post(`${environment.eyebookApiUrl}/register`, user, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public signIn(userSignIn: { username: string; password: string }) {
    return this.http.post(`${environment.eyebookApiUrl}/sign-in`, userSignIn, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public signOut(accessToken: string) {
    return this.http.post(
      `${environment.eyebookApiUrl}/sign-out`,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  }
}
