export interface CurrentUser {
  _id: string;
  displayName: string;
  photoUrl: string | null;
  email: string;
  createAt: Date;
  updateAt: Date;
  accessToken: string;
}

export interface UserRegister {
  username: string;
  password: string;
  displayName: string;
  photoUrl: string | null;
  email: string;
}

export interface UserSignIn {
  username: string;
  password: string;
}

export interface UserResponse {
  message: string;
  currentUser: CurrentUser;
}

export interface UserState {
  user: CurrentUser | null;
  status: 'idle' | 'loading' | 'error';
  errors: string[] | null;
}
