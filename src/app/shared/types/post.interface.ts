export interface Post {
  userId: string;
  displayName: string;
  userPhotoUrl: string;
  title: string;
  body?: string;
  image?: string;
  postId: string;
  createdAt: Date;
  updateAt: Date;
}
