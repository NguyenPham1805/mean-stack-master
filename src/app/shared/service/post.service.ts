import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post, PostCreate } from '../types/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  public getPosts(accessToken: string) {
    return this.http.get<Post>(`${environment.eyebookApiUrl}/post`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }

  public getPostsUser(accessToken: string, userId: string) {
    return this.http.get<Post>(
      `${environment.eyebookApiUrl}/post/user/${userId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  }

  public getPost(accessToken: string, postId: string) {
    return this.http.get<Post>(`${environment.eyebookApiUrl}/post/${postId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }

  public createPost(accessToken: string, post: PostCreate) {
    return this.http.post(`${environment.eyebookApiUrl}/post/create`, post, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  }

  public updatePost(
    accessToken: string,
    postId: string,
    postUpdate: PostCreate
  ) {
    return this.http.post(
      `${environment.eyebookApiUrl}/post/update/${postId}`,
      postUpdate,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
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
