import { Component } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: IUser[] = [
    { id: 1,  name: 'User 1',  lastName: 'Lastname 1',  username: 'user1',  email: 'user1@example.com',  url: 'https://placehold.co/400' },
    { id: 2,  name: 'User 2',  lastName: 'Lastname 2',  username: 'user2',  email: 'user2@example.com',  url: 'https://placehold.co/400' },
    { id: 3,  name: 'User 3',  lastName: 'Lastname 3',  username: 'user3',  email: 'user3@example.com',  url: 'https://placehold.co/400' },
    { id: 4,  name: 'User 4',  lastName: 'Lastname 4',  username: 'user4',  email: 'user4@example.com',  url: 'https://placehold.co/400' },
    { id: 5,  name: 'User 5',  lastName: 'Lastname 5',  username: 'user5',  email: 'user5@example.com',  url: 'https://placehold.co/400' },
    { id: 6,  name: 'User 6',  lastName: 'Lastname 6',  username: 'user6',  email: 'user6@example.com',  url: 'https://placehold.co/400' },
    { id: 7,  name: 'User 7',  lastName: 'Lastname 7',  username: 'user7',  email: 'user7@example.com',  url: 'https://placehold.co/400' },
    { id: 8,  name: 'User 8',  lastName: 'Lastname 8',  username: 'user8',  email: 'user8@example.com',  url: 'https://placehold.co/400' },
    { id: 9,  name: 'User 9',  lastName: 'Lastname 9',  username: 'user9',  email: 'user9@example.com',  url: 'https://placehold.co/400' },
    { id: 10, name: 'User 10', lastName: 'Lastname 10', username: 'user10', email: 'user10@example.com', url: 'https://placehold.co/400' }
  ];
}
