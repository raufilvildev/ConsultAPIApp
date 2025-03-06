import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { UsersManagementNotificationComponent } from '../../components/users-management-notification/users-management-notification.component';

@Component({
  selector: 'app-user-data',
  imports: [ RouterLink, UsersManagementNotificationComponent ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  
  usersService = inject(UsersService);
  router = inject(Router);
  user!: IUser;
  isDeleted: boolean = false;

  @Input() _id: string = '';

  deleteUser(_id: string) {
    this.usersService.deleteUserById(_id);
    this.isDeleted = true;
    setTimeout(() => this.isDeleted = false,1500);
  }

  ngOnInit() {
    this.usersService.getUserById(this._id).subscribe({
      next: (response: IUser) => {
        if ('error' in response) {
          this.router.navigate(['/error']);
        } else {
          this.user = response;
        }
      },
      error: (error: any) => {
        this.router.navigate(['/error']);
      }
    })
  }
}
