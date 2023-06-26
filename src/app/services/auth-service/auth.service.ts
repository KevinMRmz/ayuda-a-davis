import { Injectable } from '@angular/core';
import { CrudService } from '../crud-service/crud.service';
import { IUser } from 'src/app/types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth: boolean = false;
  user?: IUser;

  constructor(private crudService: CrudService) {}

  get getIsAuth() {
    return this.isAuth;
  }

  set setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }
}
