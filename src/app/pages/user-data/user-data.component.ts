import { Component } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-data',
  imports: [RouterLink],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  user: IUser = { id: 1,  name: 'User 1',  lastName: 'Lastname 1',  username: 'user1',  email: 'user1@example.com',  url: 'https://placehold.co/400' }
}
