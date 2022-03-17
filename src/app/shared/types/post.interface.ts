export interface Post {
  userId: string;
  title: string;
  body?: string;
  image?: string;
  postId: string;
  createdAt: Date;
  updateAt: Date;
}

export interface PostCreate {
  userId: string;
  title: string;
  body?: string;
  image?: string;
  postId: string;
}
