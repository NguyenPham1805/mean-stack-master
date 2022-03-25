import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../types/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  public getPosts(accessToken: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.eyebookApiUrl}/post`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }

  public getPostsUser(accessToken: string, userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${environment.eyebookApiUrl}/post/user/${userId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  }

  public getPost(accessToken: string, postId: string): Observable<Post> {
    return this.http.get<Post>(`${environment.eyebookApiUrl}/post/${postId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }

  public createPost(accessToken: string, post: any) {
    return this.http.post(`${environment.eyebookApiUrl}/post/create`, post, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }

  public updatePost(accessToken: string, postId: string, postUpdate: any) {
    return this.http.put(
      `${environment.eyebookApiUrl}/post/update/${postId}`,
      postUpdate,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
  }

  public deletePost(accessToken: string, postId: string) {
    return this.http.delete(
      `${environment.eyebookApiUrl}/post/delete/${postId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  }
}
