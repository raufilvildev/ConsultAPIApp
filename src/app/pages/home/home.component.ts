import { Component, inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { UsersManagementNotificationComponent } from "../../components/users-management-notification/users-management-notification.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, UsersManagementNotificationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usersService = inject(UsersService);
  users!: IUser[];
  isDeleted: boolean = false;

  deleteUser(_id: string) {
    this.usersService.deleteUserById(_id);
    this.isDeleted = true;
    setTimeout(() => this.isDeleted = false, 1500);
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe({
      next: (response: IResponse) => {
        this.users = response.results;
      },
      error: (error: any) => {
        console.log("Error: ", error);
      }
    })
  }
}
