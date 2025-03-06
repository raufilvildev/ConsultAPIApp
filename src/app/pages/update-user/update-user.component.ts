import { Component, inject, Input } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iuser.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  imports: [ FormComponent ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  @Input() _id: string = '';
  usersService = inject(UsersService);
  router = inject(Router);
  user!: IUser;
  newUserForm: boolean = false;
}
