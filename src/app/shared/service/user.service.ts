import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  public getUserInfo(
    accessToken: string,
    userId: string
  ): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(
      `${environment.eyebookApiUrl}/user/${userId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  }
}
