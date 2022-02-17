import { Subject } from 'rxjs';
import { AuthData } from './auth-data.module';
import { User } from './user.model';

export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authChange.next(true);
    console.log('authdata', authData);
  }
  loginData(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
    this.authChange.next(true);
    console.log('authdata', authData);
  }
  logOut() {
    this.user = null;
    this.authChange.next(false);
  }
  getUser() {
    return { ...this.user };
  }
  isAuth() {
    return this.user != null;
  }
}
