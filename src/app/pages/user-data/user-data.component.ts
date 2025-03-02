import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-data',
  imports: [ RouterLink ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  
  users = inject(UsersService);
  router = inject(Router);
  user!: IUser;

  @Input() id: string = '';

  ngOnInit() {
    const response = this.users.getUserById(Number(this.id));
    if (!response) {
      this.router.navigate(['/error']);
    } else {
      this.user = response;
    }
  }
}
