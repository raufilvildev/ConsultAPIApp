import { Component } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-update-user',
  imports: [ FormComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  user: IUser = { id: 1,  name: 'User 1',  lastName: 'Lastname 1',  username: 'user1',  email: 'user1@example.com',  url: 'https://placehold.co/400' }
  newUserForm: boolean = false;
}
