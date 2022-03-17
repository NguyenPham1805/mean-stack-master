export interface CurrentUser {
  _id: string;
  displayName: string;
  photoUrl?: string;
  email: string;
  createAt: Date;
  updateAt: Date;
}

export interface RegisterUser {
  username: string;
  password: string;
  displayName: string;
  photoUrl?: string;
  email: string;
}