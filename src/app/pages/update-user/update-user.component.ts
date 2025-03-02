import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { FormComponent } from "../../components/form/form.component";
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-update-user',
  imports: [ FormComponent ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  
  users = inject(UsersService);
  router = inject(Router);
  user!: IUser;

  @Input() id: string = '';

  newUserForm: boolean = false;

  ngOnInit() {
    const response = this.users.getUserById(Number(this.id));
    if (!response) {
      this.router.navigate(['/error']);
    } else {
      this.user = response;
    }
  }
}
