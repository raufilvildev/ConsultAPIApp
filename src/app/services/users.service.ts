import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { USERS } from '../db/services.db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: IUser[] = USERS;

  getUsers(): IUser[] {
    return this.users;
  }

  getUserById(id: number): IUser | undefined {
    return this.users.find(user => user.id === id);
  }
}
